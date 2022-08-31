<template>
  <v-row>
    <v-col cols="auto" v-for="(storageLocation, i) in storageLoactions" :key="i">
      <v-card :to="storageLocation.id" append max-width="300">
        <v-card-title>{{ storageLocation.name }}</v-card-title>
        <v-card-text>{{ storageLocation.description }}</v-card-text>
        <v-card-subtitle>Total Items: {{ storageLocation.items.length }}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" src="./LocationSelection.ts"/>

<style scoped>

</style>