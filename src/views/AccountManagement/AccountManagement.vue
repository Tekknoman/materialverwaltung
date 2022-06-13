<template>
<v-main>
  <v-card>
    <v-card-title>Manage Account</v-card-title>
    <v-card-text>
      <v-form
          lazy-validation
          ref="form"
          v-model="valid"
      >
        <v-text-field
            v-model="displayName"
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
            type="password"
            ref="passwordConfirm"
        ></v-text-field>
        <v-btn
            @click="updateAccount"
            color="primary"
            large
            v-bind:disabled="!valid"
            >Update
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</v-main>
</template>

<script lang="ts" src="./AccountManagement.ts"/>

<style scoped>
</style>