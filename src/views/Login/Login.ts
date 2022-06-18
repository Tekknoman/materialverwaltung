import router from '@/router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'Login'
})
export default class Login extends Vue {
  email = '';
  password = '';

  public get loading(): boolean {
    return false;
  }

  public login(): void {
    signInWithEmailAndPassword(getAuth(), this.email, this.password).then(() => {
      router.push('Home');
    });
  }
}
