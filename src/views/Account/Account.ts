import {
    EmailAuthProvider,
    getAuth,
    reauthenticateWithCredential,
    updateEmail,
    updatePassword,
    updateProfile,
    User
} from 'firebase/auth';
import Vue from 'vue';
import PasswordDialog from "@/components/PasswordDialog/PasswordDialog.vue";
import Component from "vue-class-component";
import {triggerAlert} from "@/models/Alert";
import AlertType from "@/models/AlertType";


@Component({
    name: 'Account',
    components: {
        PasswordDialog
    }
})
export default class Account extends Vue {
    dialog = false;
    loadingPassConfirm = false;
    private accountEditing = {
        displayName: '' as string | null,
        email: '' as string | null,
        photoURL: '' as string | null
    };

    private passwordChange = {
        old: '' as string | null,
        new: '' as string | null,
        confirm: '' as string | null
    }

    public get user(): User {
        return this.$store.getters.user;
    }

    public get updateBtnDisabled(): boolean {
        return !this.displayNameEdited && !this.emailEdited && !this.avatarEdited;
    }

    public get changePasswordBtnDisabled(): boolean {
        return !this.passwordChange.new || !this.passwordChange.confirm || this.passwordChange.new.length < 6 || this.passwordChange.new !== this.passwordChange.confirm;
    }

    public get loading(): boolean {
        return this.$store.getters.loading;
    }

    public set loading(value: boolean) {
        this.$store.commit('SET_LOADING', value);
    }

    public randomAvatar(): boolean {
        const seed = this.user?.uid + (new Date().getTime() / 420 - 69);
        this.accountEditing.photoURL = 'https://avatars.dicebear.com/api/bottts/' + seed + '.svg';
        return false
    }


    public updateAccountDetails(): void {
        const session: User = getAuth().currentUser as User;
        this.loading = true;
        updateProfile(session, {
            photoURL: this.accountEditing.photoURL,
            displayName: this.accountEditing.displayName
        }).then(() => {
            this.loading = false;
            triggerAlert('Account details updated successfully', AlertType.success);
        }).catch(() => {
            this.loading = false;
            triggerAlert('Account details update failed', AlertType.error);
        });

        if (this.accountEditing.email !== this.user.email && this.accountEditing.email != null) {
            updateEmail(session, this.accountEditing.email).then(() => {
                triggerAlert('Email updated successfully', AlertType.success);
            }).catch(() => {
                triggerAlert('Email update failed', AlertType.error);
            });
        }
    }

    public get emailEdited(): boolean {
        return this.accountEditing.email !== this.user.email;
    }

    public get displayNameEdited(): boolean {
        return this.accountEditing.displayName !== this.user.displayName;
    }

    public get avatarEdited(): boolean {
        return this.accountEditing.photoURL !== this.user.photoURL;
    }


    public resetAccountEditing(): void {
        const {displayName, email, photoURL} = this.user as User;
        this.accountEditing = {
            displayName,
            email,
            photoURL
        };
    }

    public openPasswordPromt(): void {
        this.dialog = true;

    }

    public resetPasswordForm():void {
        if (this.$refs.pwRef) {
            const ref = this.$refs.pwRef as HTMLFormElement;
            ref.reset();
        }
        this.passwordChange = {
            old: '',
            new: '',
            confirm: ''
        }
    }

    public changePassword(old: string | undefined): void {
        if (!old || old.length <= 0) {
            this.dialog = false;
            return
        }
        this.loadingPassConfirm = true;
        if (this.user.email != null) {
            const credential = EmailAuthProvider.credential(this.user.email, old);
            reauthenticateWithCredential(<User>getAuth().currentUser, credential).then(() => {
                updatePassword(<User>getAuth().currentUser, <string>this.passwordChange.new).then(() => {
                    this.loadingPassConfirm = false;
                    this.dialog = false;
                    this.resetPasswordForm();
                    this.$store.commit('SET_ALERT', {message: 'Password changed successfully', type: 'success'});
                }).catch(() => {
                    this.loadingPassConfirm = false;
                    this.$store.commit('SET_ALERT', {message: 'Password change failed', type: 'error'});
                });
            }).catch(() => {
                this.loadingPassConfirm = false;
                this.$store.commit('SET_ALERT', {message: 'Password change failed', type: 'error'});
            });
        } else {
            this.loadingPassConfirm = false;
            this.$store.commit('SET_ALERT', {message: 'You must have an email to change your password', type: 'error'});
        }
    }


    resetValidation(): void {
        if (!this.passwordChange.new && !this.passwordChange.confirm) {
            if (this.$refs.pwRef) {
                const ref = this.$refs.pwRef as HTMLFormElement;
                ref.resetValidation();
            }
        }
    }

    mounted(): void {
        this.resetAccountEditing();
    }

    emailRules = [
        (v: string): boolean | string => !!v || 'E-mail is required',
        (v: string): boolean | string => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ]
    nameRules = [
        (v: string): boolean | string => !!v || 'Name is required',
        (v: string): boolean | string => v.length <= 50 || 'Name must be less than 50 characters'
    ]

    passwordRules = [
        (v: string): boolean | string => !!v || 'Password is required',
        (v: string): boolean | string => v.length >= 6 || 'Password must be at least 6 characters',
        (v: string): boolean | string => /\d/.test(v) || 'Password must contain a number',
        (v: string): boolean | string => /[a-z]/.test(v) || 'Password must contain a lowercase letter',
        (v: string): boolean | string => /[A-Z]/.test(v) || 'Password must contain an uppercase letter',
        (v: string): boolean | string => /[^a-zA-Z0-9]/.test(v) || 'Password must contain a special character'
    ]

    get confirmPasswordRules(): ((v: string) => (boolean | string))[] {
        return [
            (v: string): boolean | string => !!v || 'Password is required',
            (v: string): boolean | string => v.length >= 6 || 'Password must be at least 6 characters',
            (v: string): boolean | string => /\d/.test(v) || 'Password must contain a number',
            (v: string): boolean | string => /[a-z]/.test(v) || 'Password must contain a lowercase letter',
            (v: string): boolean | string => /[A-Z]/.test(v) || 'Password must contain an uppercase letter',
            (v: string): boolean | string => /[^a-zA-Z0-9]/.test(v) || 'Password must contain a special character',
            (v: string): boolean | string => v === this.passwordChange.new || 'Passwords must match'
        ]
    }
}
