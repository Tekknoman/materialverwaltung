<template>
  <v-dialog
      v-model="dialog"
      width="500"
      @click:outside="callback(undefined)"
      @keydown.esc="callback(undefined)"
      overlay-opacity="0.1"
  >
    <v-card>
      <h1>{{ item.title }}</h1>
      <v-form>
        <v-text-field
            v-model="item.title"
            label="Title"
            required
        ></v-text-field>
        <v-text-field
            v-model="item.description"
            label="Description"
            required
        ></v-text-field>
        <v-text-field
            v-model="item.location"
            label="Location"
            required
        ></v-text-field>
        <v-text-field
            v-model="item.category"
            label="Category"
            required
        ></v-text-field>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" src="./ItemForm.ts"/>

<style scoped>

</style>