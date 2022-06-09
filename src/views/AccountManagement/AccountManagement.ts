import Vue from "vue";
import Component from "vue-class-component";
import firebase from "firebase/compat";
import store from "@/store";

@Component({
    name: "AccountManagement"
})
export default class AccountManagement extends Vue {
    newName = "";
    newMail = "";
    password = "";
    passwordConfirm = "";
    valid = false;

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
            store.dispatch("fetchUser", user).then(r => {
                //  TODO ADD Message
                console.log("User: ", r);
            });
        });
    }

    public updateAccount() {
        if (this.newName !== this.displayName) {
            firebase.auth().currentUser?.updateProfile({
                displayName: this.newName,
            }).then(() => {
                this.fetchUser();
            }).catch((e) => {
                console.log(e);
            });
        }
        if (this.newMail !== this.email) {
            firebase.auth().currentUser?.updateEmail(this.newMail).then(() => {
                this.fetchUser();
            }).catch((e) => {
                console.log(e);
            });
        }
        this.newName = "";
        this.newMail = "";
    }

}