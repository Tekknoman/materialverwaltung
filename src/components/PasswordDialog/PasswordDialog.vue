<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="500"
    >

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Confirm Password-change
        </v-card-title>

        <v-card-text>
          Please enter your old password to confirm password change.
          <v-text-field label="Password" v-model="old" counter="128" type="password" required></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              :loading="loading"
              @click="callback(old)"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" src="./PasswordDialog.ts"/>