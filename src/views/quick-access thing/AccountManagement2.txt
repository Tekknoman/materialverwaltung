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
          <v-btn
              @click="sendPasswordResetEmail"
              color="info"
              large
          >
            Reset Password
          </v-btn>
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
    <v-card class="mt-5">
      <v-card-title>Delete Account</v-card-title>
      <v-card-text class="d-flex justify-center">
        <v-btn
            @click="openDeleteConfirmFloat"
            color="error"
            large
        >Delete
        </v-btn>
      </v-card-text>
    </v-card>
    <v-dialog
        v-model="deleteConfirmFloat"
        transition="dialog-bottom-transition"
        opacity="0.1"
    >
      <v-card>
        <v-card-title>Delete Account</v-card-title>
        <v-card-text>
          <p>Your account will be permanently removed. This cannot be undone.<br>
            <strong>Are you sure you want to delete your account?</strong></p>
          <v-card>
            <v-card-text>
              <p>Match the sliders to confirm</p>
              <v-slider
                  readonly
                  v-model="deleteConfirmReference"
              ></v-slider>
              <v-slider
                  v-model="deleteConfirmInput"
                  :rules="deleteConfirmRule"
              ></v-slider>
            </v-card-text>
          </v-card>
          <v-btn
              color="error"
              @click="deleteAccount"
              class="mt-2"
              :disabled="!deleteConfirm"
          >Delete
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-main>
</template>

<script lang="ts" src="./AccountManagement.ts"/>

<style scoped>
</style>