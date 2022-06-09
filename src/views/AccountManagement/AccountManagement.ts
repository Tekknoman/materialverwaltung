import Vue from "vue";
import Component from "vue-class-component";
import firebase from "firebase/compat";

@Component({
    name: "AccountManagement"
})
export default class AccountManagement extends Vue {
    email = undefined;
    password = "";
    passwordConfirm = "";
    name = undefined;
    valid = false;

    public get user(){
        return this.$store.getters.user;
    }
    mounted() {
        this.email = this.user.email;
        this.name = this.user.displayName;
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

}