<template>
  <div>
    <div class="mt-6">
      <h1>Manage Account</h1>
      <div class="d-flex flex-row align-end mt-6 mb-6">
        <v-badge class="col-3 pa-0" color="primary" :value="avatarEdited">
          <template v-slot:badge>
            <v-icon @click="accountEditing.photoURL = user.photoURL">mdi-close</v-icon>
          </template>
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card @click="randomAvatar" class="pa-2">
                <v-img transition="scale-transition" :src="accountEditing.photoURL"></v-img>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="warning">
                    <strong style="-webkit-user-select: none; /* Safari */ -moz-user-select: none; /* Firefox */ -ms-user-select: none; /* IE10+/Edge */ user-select: none; /* Standard */">Randomize </strong>
                    <v-icon large>mdi-shuffle-variant</v-icon>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-badge>

        <div class="flex-grow-1 ml-6">
          <v-form lazy-validation ref="form">
            <v-badge class="d-flex" color="primary" offset-y="20" :value="displayNameEdited" overlap>
              <template v-slot:badge>
                <v-icon @click="accountEditing.displayName = user.displayName">mdi-close</v-icon>
              </template>
              <v-text-field :rules="nameRules" label="Name" counter="50" required v-model="accountEditing.displayName"></v-text-field>
            </v-badge>

            <v-badge class="d-flex" color="primary" offset-y="20" :value="emailEdited" overlap>
              <template v-slot:badge>
                <v-icon @click="accountEditing.email = user.email">mdi-close</v-icon>
              </template>
              <v-text-field :rules="emailRules" label="E-mail" required v-model="accountEditing.email"></v-text-field>
            </v-badge>

            <v-btn color="primary" :loading="loading" :disabled="updateBtnDisabled" medium class="mr-2" @click="updateAccountDetails">Update</v-btn>
          </v-form>
        </div>
      </div>
    </div>

    <v-divider class="mt-6 mb-6"></v-divider>

    <div>
      <h4>Password</h4>
      <v-form @submit.prevent="openPasswordPromt" lazy-validation ref="pwRef">
        <v-text-field @blur="resetValidation" label="Password" :rules="passwordRules" v-model="passwordChange.new" counter="128" type="password" required></v-text-field>
        <v-text-field @blur="resetValidation" label="Repeat password" :rules="confirmPasswordRules" v-model="passwordChange.confirm" counter="128" type="password" required></v-text-field>
        <v-btn color="primary" :loading="loading" :disabled="changePasswordBtnDisabled" type="submit" medium class="mr-2">Change Password</v-btn>
      </v-form>
    </div>

    <v-divider class="mt-6 mb-6"></v-divider>

    <div>
      <h4>Account removal</h4>
      <p>This will delete your account permanently.</p>
      <v-form lazy-validation ref="form">
        <v-btn color="error" medium>Delete</v-btn>
      </v-form>
    </div>

    <!-- <v-dialog v-model="deleteConfirmFloat" transition="dialog-bottom-transition" opacity="0.1">
      <v-card>
        <v-card-title>Delete Account</v-card-title>
        <v-card-text>
          <p>Your account will be permanently removed. This cannot be undone.<br /><strong>Are you sure you want to delete your account?</strong></p>
          <v-card>
            <v-card-text>
              <p>Match the sliders to confirm</p>
              <v-slider readonly v-model="deleteConfirmReference"></v-slider>
              <v-slider v-model="deleteConfirmInput" :rules="deleteConfirmRule"></v-slider>
            </v-card-text>
          </v-card>
          <v-btn color="error" class="mt-2" :disabled="!deleteConfirm">Delete</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog> -->
    <PasswordDialog :callback="changePassword" :loading="loadingPassConfirm" :dialog="dialog"></PasswordDialog>
  </div>
</template>

<script lang="ts" src="./Account.ts" />
