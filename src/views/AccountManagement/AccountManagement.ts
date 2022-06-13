import Vue from "vue";
import Component from "vue-class-component";
import firebase from "firebase/compat";
import store from "@/store";
import {getAuth} from "firebase/auth";

@Component({
    name: "AccountManagement"
})
export default class AccountManagement extends Vue {
    newName = "";
    newMail = "";
    password = "";
    passwordConfirm = "";
    valid = false;
    deleteConfirmFloat = false;
    deleteConfirmReference = Math.floor(Math.random() * 100);
    deleteConfirmInput = Math.floor(this.deleteConfirmReference / (Math.random() * 100));
    auth = getAuth();

    public resetDeleteConfirm() {
        this.deleteConfirmReference = Math.floor(Math.random() * 100);
        this.deleteConfirmInput = Math.floor(this.deleteConfirmReference / (Math.random() * 100));
    }

    public openDeleteConfirmFloat() {
        this.deleteConfirmFloat = true;
        this.resetDeleteConfirm()
    }

    public get deleteConfirmRule() {
        return [
            (v: number) => v === this.deleteConfirmReference || "The sliders don't match"
        ]
    }

    public get deleteConfirm() {
        return this.deleteConfirmReference === this.deleteConfirmInput;
    }

    public get user() {
        return this.$store.getters.user;
    }

    public get email(): string {
        return this.user.data ? this.user.data.email : "";
    }

    public set email(email: string) {
        this.newMail = email;
    }

    public get displayName(): string {
        return this.user.data ? this.user.data.displayName : "";
    }

    public set displayName(name: string) {
        this.newName = name;
    }

    emailRules = [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ]
    nameRules = [
        (v: string) => !!v || 'Name is required',
        (v: string) => v.length <= 50 || 'Name must be less than 50 characters'
    ]

    public get passwordRules() {
        return [
            (v: string) => !!v || 'Password is required',
            (v: string) => v.length >= 6 || 'Password must be at least 6 characters',
            (v: string) => /\d/.test(v) || 'Password must contain a number',
            (v: string) => /[a-z]/.test(v) || 'Password must contain a lowercase letter',
            (v: string) => /[A-Z]/.test(v) || 'Password must contain an uppercase letter',
            (v: string) => /[^a-zA-Z0-9]/.test(v) || 'Password must contain a special character'
        ]
    }

    public get confirmPasswordRules() {
        return [
            (v: string) => !!v || 'Password is required',
            (v: string) => v.length >= 6 || 'Password must be at least 6 characters',
            (v: string) => /\d/.test(v) || 'Password must contain a number',
            (v: string) => /[a-z]/.test(v) || 'Password must contain a lowercase letter',
            (v: string) => /[A-Z]/.test(v) || 'Password must contain an uppercase letter',
            (v: string) => /[^a-zA-Z0-9]/.test(v) || 'Password must contain a special character',
            (v: string) => v === this.password || 'Passwords must match'
        ]
    }

    fetchUser() {
        firebase.auth().onAuthStateChanged(user => {
            store.dispatch("fetchUser", user).then();
        });
    }

    public sendPasswordResetEmail() {
        firebase.auth().sendPasswordResetEmail(this.email).then(() => {
            this.$store.commit("SET_ALERT", {
                type: "success",
                message: "Password reset email sent",
                show: true
            });
        }).catch(() => {
            this.$store.commit("SET_ALERT", {
                type: "error",
                message: "Something went wrong. Please try again.",
                show: true
            });
        });
    }

    public deleteAccount() {
        if (this.deleteConfirm) {
            firebase.auth().currentUser?.delete().then(() => {
                this.resetDeleteConfirm();
                this.auth.signOut().then(() => {
                    this.$store.dispatch('signOut').then(() => {
                        this.$store.commit("SET_ALERT", {
                            type: "success",
                            message: "Account deleted",
                            show: true
                        });
                    });
                })
            }).catch(() => {
                this.$store.commit("SET_ALERT", {
                    type: "error",
                    message: "Something went wrong. Please try again.",
                    show: true
                });
                this.resetDeleteConfirm();
            });
        }
    }

    public updateAccount() {
        const success = {
            type: "success",
            message: "Account updated",
            show: true
        };
        const error = {
            type: "error",
            message: "Something went wrong. Please try again.",
            show: true
        };
        if (this.newName !== this.displayName && this.newName.length > 0) {
            firebase.auth().currentUser?.updateProfile({
                displayName: this.newName,
            }).then(() => {
                this.fetchUser();
                this.$store.commit("SET_ALERT", success);
            }).catch(() => {
                this.$store.commit("SET_ALERT", error);
            });
        }
        if (this.newMail !== this.email && this.newMail.length > 0) {
            firebase.auth().currentUser?.updateEmail(this.newMail).then(() => {
                this.fetchUser();
                this.$store.commit("SET_ALERT", success);
            }).catch(() => {
                    this.$store.commit("SET_ALERT", error);
                }
            );
        }

        this.newName = "";
        this.newMail = "";
    }

}