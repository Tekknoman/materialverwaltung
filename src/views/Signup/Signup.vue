<template>
  <v-main>
    <v-card>
      <v-form
          lazy-validation
      >
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
        ></v-text-field>
        <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
            type="password"
        ></v-text-field>
        <v-text-field
            v-model="passwordConfirm"
            :rules="passwordConfirmRules"
            label="Confirm Password"
            required
            v-if="password"
            type="password"
        ></v-text-field>
      </v-form>
    </v-card>
  </v-main>
</template>

<script lang="ts" src="./Signup.ts"/>
