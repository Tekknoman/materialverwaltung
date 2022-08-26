<template>
  <v-form>
    <h1 v-if="$route.params.groupId === 'new'">Create</h1>
    <h1 v-else>Edit</h1>
    <v-text-field
        v-model="editGroup.name"
        label="Name"
        :rules="[v => !!v || 'Name is required']"
    ></v-text-field>
    <v-textarea
        v-model="editGroup.description"
        label="Description"
        counter="400"
    ></v-textarea>
    <v-btn
        v-if="$route.params.groupId === 'new'"
        color="primary"
        @click="createGroup">Create</v-btn>
    <v-btn
        v-else
        color="primary"
        >Save</v-btn>
  </v-form>
</template>

<script lang="ts" src="./GroupDetail.ts"/>

<style scoped>

</style>