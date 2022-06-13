import Vue from "vue";
import Component from "vue-class-component";
import firebase from "firebase/compat";

@Component({
    name: "Login"
})
export default class Login extends Vue {
    email = "";
    password = "";

    public get loading() {
        return this.$store.getters.loading;
    }

    public login() {
        if (!this.loading) {
            this.$store.commit("SET_LOADING", true);
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
                this.$store.commit("SET_ALERT", {
                    type: "success",
                    message: "You have been logged in",
                    show: true
                });
                this.$router.replace({name: "Home"}).then(
                    () => {
                        this.$store.commit("SET_LOADING", false);
                    }
                );
            }).catch(() => {
                this.$store.commit("SET_ALERT", {
                    type: "error",
                    message: "Something went wrong. Please try again.",
                    show: true
                });
                this.$store.commit("SET_LOADING", false);
            })
        }
    }


}