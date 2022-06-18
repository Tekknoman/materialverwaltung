import Navigation from '@/components/Navigation/Navigation.vue';
import { getAuth, User } from 'firebase/auth';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'App',
  components: { Navigation }
})

export default class App extends Vue {

  public get isUserLoggedIn(): boolean {
    return this.$store.getters.isLoggedIn;
  }

  public get user(): User | null | undefined {
    return this.$store.getters.user;
  }

  public get alert() {
    return this.$store.getters.alert;
  }

  public get showAlert(): boolean {
    return this.$store.getters.showAlert;
  }

  public set showAlert(value: boolean) {
    this.$store.commit('SET_SHOW_ALERT', value);
    console.debug('showAlert', value);
  }

  public logout(): void {
    getAuth().signOut();
  }
}
