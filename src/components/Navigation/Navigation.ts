import { NavigationItem } from '@/types';
import { User } from 'firebase/auth';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'Navigation'
})
export default class Navigation extends Vue {
  drawer = true
  private items: NavigationItem[] = [
    { title: 'Home', icon: 'mdi-home-city', path: '/' },
    { title: 'My Account', icon: 'mdi-account', path: '/account' },
    { title: 'Users', icon: 'mdi-account-group-outline', path: '/users' },
    { title: 'Material', icon: 'mdi-bookshelf', path: '/material' },
    { title: 'Logout', icon: 'mdi-logout', path: '/logout' }
  ];

  public get user(): User | null | undefined {
    return this.$store.getters.user;
  }

  public get avatarUrl(): string {
    return this.user?.photoURL || 'https://avatars.dicebear.com/api/bottts/69420funnysex.svg';
  }
}
