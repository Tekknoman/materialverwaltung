import Vue from "vue";
import Component from "vue-class-component";
import firebase from "firebase/compat";

@Component({
    name: "Login"
})
export default class Login extends Vue {
    email = "";
    password = "";
    loading = false;

    public login() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(r => {
            console.log("Result: ", r);
            this.$router.replace({name: "Home"}).then(r => {
                    console.log("Redirect: ", r);
                }
            );
        }).catch(e => {
            console.log(e);

        })
    }


}