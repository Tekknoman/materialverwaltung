<template>
  <v-app>
    <Navigation v-if="isUserLoggedIn"/>
    <v-main class="mt-6">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-snackbar :timeout="3000" :color="alert.type" v-model="showAlert" elevation="4" transition="slide-y-transition" min-width="200" right top>
      {{ alert.message }}
    </v-snackbar>
  </v-app>
</template>
<script src="./App.ts" lang="ts" />
