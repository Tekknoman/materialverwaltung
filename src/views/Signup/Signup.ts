import Vue from "vue";
import Component from "vue-class-component";

@Component({
    name: "Signup"
})
export default class Signup extends Vue {
    email = "";
    public password = "";
    public passwordConfirm = "";
    emailRules = [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ]
    passwordRules = [
        (v: string) => !!v || 'Password is required',
        (v: string) => v.length >= 6 || 'Password must be at least 6 characters',
        (v: string) => /\d/.test(v) || 'Password must contain a number',
        (v: string) => /[a-z]/.test(v) || 'Password must contain a lowercase letter',
        (v: string) => /[A-Z]/.test(v) || 'Password must contain an uppercase letter',
        (v: string) => /[^a-zA-Z0-9]/.test(v) || 'Password must contain a special character'

    ]
    passwordConfirmRules = [
        (v: string) => !!v || 'Password is required',
        (v: string) => v.length >= 6 || 'Password must be at least 6 characters',
        (v: string) => /\d/.test(v) || 'Password must contain a number',
        (v: string) => /[a-z]/.test(v) || 'Password must contain a lowercase letter',
        (v: string) => /[A-Z]/.test(v) || 'Password must contain an uppercase letter',
        (v: string) => /[^a-zA-Z0-9]/.test(v) || 'Password must contain a special character',
        (v: string) => v === this.passwordConfirm || 'Passwords must match'

    ]
}