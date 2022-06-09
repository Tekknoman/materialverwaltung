<template>
  <v-main class="d-flex flex-column align-center">
    <v-card min-width="300" max-width="500">
      <v-card-title>
        <span class="headline">Login</span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
              v-model="email"
              label="E-mail"
          >
          </v-text-field>
          <v-text-field
              v-model="password"
              label="Password"
              type="password"
          >
          </v-text-field>
          <v-container class="d-flex justify-space-between align-end">
            <v-btn
                @click="login"
                :disabled="!email || !password"
                color="primary"
                large
                :loading="loading"
            >Login
            </v-btn>
            <router-link class="pr-4" to="/signup"> No Account?
            </router-link>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-main>
</template>

<script lang="ts" src="./Login.ts"/>

<style scoped>
</style>