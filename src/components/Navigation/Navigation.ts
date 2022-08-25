import {NavigationItem} from '@/types';
import {User} from 'firebase/auth';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    name: 'Navigation'
})
export default class Navigation extends Vue {
    drawer = true

    get items(): Array<NavigationItem> {
        return this.$router.getRoutes().sort((a, b) => {
            if (typeof a.meta.position === 'number') {
                return a.meta.position - this.$router.getRoutes().findIndex(route => route === b);
            } else if (typeof b.meta.position === 'number') {
                return this.$router.getRoutes().findIndex(route => route === a) - b.meta.position;
            } else {
                return a.name && b.name ? a.name.localeCompare(b.name) : 1;
            }

        }).filter(route => {
            return route.meta?.isVisibleInNav;
        }).map(route => {
            return {
                title: route.meta?.navTitle || route.name,
                icon: route.meta.navIcon,
                path: route.path
            };
        });
    }

    // private items: NavigationItem[] = [
    //     {title: 'Home', icon: 'mdi-home-city', path: '/'},
    //     {title: 'My Account', icon: 'mdi-account', path: '/account'},
    //     {title: 'Groups', icon: 'mdi-account-group-outline', path: '/groups'},
    //     {title: 'Material', icon: 'mdi-bookshelf', path: '/material'},
    //     {title: 'Logout', icon: 'mdi-logout', path: '/logout'}
    // ];

    public get user(): User | null | undefined {
        return this.$store.getters.user;
    }

    public get avatarUrl(): string {
        return this.user?.photoURL || 'https://avatars.dicebear.com/api/bottts/69420funnysex.svg';
    }
}
