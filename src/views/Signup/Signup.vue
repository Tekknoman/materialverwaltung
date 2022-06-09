<template>
  <v-main class="d-flex flex-column align-center">
    <v-card min-width="300" max-width="500">
      <v-card-title class="headline">Signup</v-card-title>
      <v-card-text>
        <v-form
            lazy-validation
            ref="form"
            v-model="valid"
        >
          <v-text-field
              v-model="name"
              label="Name"
              :rules="nameRules"
              counter="50"
              required
          ></v-text-field>
          <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
          ></v-text-field>
          <v-text-field
              v-model="password"
              :rules="passwordRules"
              @input="$refs.form.validate()"
              label="Password"
              required
              type="password"
              ref="password"
          ></v-text-field>
          <v-text-field
              v-model="passwordConfirm"
              :rules="confirmPasswordRules"
              @input="$refs.form.validate()"
              label="Confirm Password"
              required
              v-if="password"
              type="password"
              ref="passwordConfirm"
          ></v-text-field>
          <v-btn
              @click="signup"
              color="primary"
              large
              v-bind:disabled="!valid || !passwordConfirm || !password || !email"
              :loading="loading">Signup
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-main>
</template>

<script lang="ts" src="./Signup.ts"/>