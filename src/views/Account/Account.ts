import {
    getAuth,
    updateEmail,
    updateProfile,
    User,
    reauthenticateWithCredential,
    signInWithEmailAndPassword,
    updatePassword,
    EmailAuthProvider
} from 'firebase/auth';
import Vue from 'vue';
import Component from 'vue-class-component';
import PasswordDialog from "@/components/PasswordDialog/PasswordDialog.vue";

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
        return !this.passwordChange.new || this.passwordChange.new.length < 6 || this.passwordChange.new !== this.passwordChange.confirm;
    }

    public randomAvatar(): boolean {
        const seed = this.user?.uid + (new Date().getTime() / 420 - 69);
        this.accountEditing.photoURL = 'https://avatars.dicebear.com/api/bottts/' + seed + '.svg';
        return false
    }

    public updateAccountDetails(): void {
        const session: User = getAuth().currentUser as User;

        updateProfile(session, {
            photoURL: this.accountEditing.photoURL,
            displayName: this.accountEditing.displayName
        });

        if (this.accountEditing.email !== this.user.email) {
            updateEmail(session, this.accountEditing.email!);
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

    public changePassword(old: string): void {
        this.loadingPassConfirm = true;
        if (this.user.email != null) {
            const credential = EmailAuthProvider.credential(this.user.email, old);
            reauthenticateWithCredential(<User>getAuth().currentUser, credential).then(() => {
                updatePassword(<User>getAuth().currentUser, <string>this.passwordChange.new).then(() => {
                    this.loadingPassConfirm = false;
                    this.dialog = false;
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

    mounted(): void {
        this.resetAccountEditing();
    }

    emailRules = [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ]
    nameRules = [
        (v: string) => !!v || 'Name is required',
        (v: string) => v.length <= 50 || 'Name must be less than 50 characters'
    ]

    passwordRules = [
        (v: string) => !!v || 'Password is required',
        (v: string) => v.length >= 6 || 'Password must be at least 6 characters',
        (v: string) => /\d/.test(v) || 'Password must contain a number',
        (v: string) => /[a-z]/.test(v) || 'Password must contain a lowercase letter',
        (v: string) => /[A-Z]/.test(v) || 'Password must contain an uppercase letter',
        (v: string) => /[^a-zA-Z0-9]/.test(v) || 'Password must contain a special character'
    ]

    public get confirmPasswordRules() {
        return [
            (v: string) => !!v || 'Password is required',
            (v: string) => v.length >= 6 || 'Password must be at least 6 characters',
            (v: string) => /\d/.test(v) || 'Password must contain a number',
            (v: string) => /[a-z]/.test(v) || 'Password must contain a lowercase letter',
            (v: string) => /[A-Z]/.test(v) || 'Password must contain an uppercase letter',
            (v: string) => /[^a-zA-Z0-9]/.test(v) || 'Password must contain a special character',
            (v: string) => v === this.passwordChange.new || 'Passwords must match'
        ]
    }
}
