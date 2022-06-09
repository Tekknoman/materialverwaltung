<template>
  <v-app id="app">
    <v-main>
      <v-navigation-drawer
          permanent
          expand-on-hover
          absolute
          :mini-variant.sync="drawer"
      >
        <v-list>
          <v-list-item class="px-2" to="/">
            <v-list-item-avatar>
              <v-icon>mdi-tools</v-icon>
            </v-list-item-avatar>
          </v-list-item>
          <v-list-item to="/accountManagement" link v-if="user.loggedIn">
            <v-list-item-content v-if="!drawer">
              <v-list-item-title class="text-h6">
                {{ user.data.displayName }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ user.data.email }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content v-else>
              <v-icon>mdi-account</v-icon>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
            nav
            dense
        >
          <v-list-item v-if="!user.loggedIn" to="login" link>
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="user.loggedIn" @click="logout" link>
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-container>
        <v-snackbar
            :timeout="3000"
            :color="alert.type"
            v-model="showAlert"
            elevation="4"
            transition="slide-y-transition"
            min-width="200"
            absolute
            right
            top
        >
          {{ alert.message }}
        </v-snackbar>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";
import {getAuth} from "firebase/auth";

@Component({
  name: 'App'
}) export default class App extends Vue {
  private drawer = true;
  auth = getAuth();

  public get user() {
    return this.$store.getters.user;
  }

  public get alert() {
    return this.$store.getters.alert;
  }

  public get showAlert(){
    return this.$store.getters.showAlert;
  }
  public set showAlert(value: boolean){
    this.$store.commit('SET_SHOW_ALERT', value);
    console.log('showAlert', value);
  }

  public logout() {
    this.auth.signOut();
    this.$store.dispatch('signOut');
  }
}
</script>

