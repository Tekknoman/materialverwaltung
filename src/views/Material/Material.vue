<template>
  <v-main>
    <h1>Material</h1>
    <v-container>
      <v-card max-width="300" v-for="(storageLocation, i) in storageLoactions" :key="i">
        <div class="map" :ref="storageLocation.id"></div>
        <v-card-title>{{ storageLocation.name }}</v-card-title>
        <v-card-text>{{ storageLocation.description }}</v-card-text>
        <v-card-subtitle>Total Items: {{ storageLocation.itemCount }}</v-card-subtitle>
      </v-card>
    </v-container>
  </v-main>
</template>

<script lang="ts" src="./Material.ts"/>
<style>
.map{
  height: 300px;
  width: 100%;
}
</style>
