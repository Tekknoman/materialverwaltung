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
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-icon>mdi-tools</v-icon>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content v-if="!drawer">
              <v-list-item-title class="text-h6">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content v-else>
              <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" width="100"></v-img>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
            nav
            dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";

@Component({
  name: 'App'
}) export default class App extends Vue {
  private drawer = true;
}
</script>

