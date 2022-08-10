<template>
  <div class="d-flex flex-column">
    <div class="mb-3">
      <v-btn color="primary" @click="$router.push('/material')" text outlined>
        <v-icon>mdi-arrow-left</v-icon>
        Select Location
      </v-btn>

    </div>
    <div>
      <v-row>
        <v-col
            cols="auto"
            v-for="n in 10" :key="n"
        >
          <v-card max-width="300">
            <v-card-subtitle>Category</v-card-subtitle>
            <div class="justify-center d-flex">
              <v-icon size="120">mdi-sitemap</v-icon>
            </div>
            <v-card-title>Item Name</v-card-title>
            <v-card-text class="d-flex flex-wrap">
              <v-chip class="ma-1" v-for="n in 10" :key="n">Tag {{ n }}</v-chip>
            </v-card-text>
            <v-card-actions>
              <v-btn block color="primary" text>Borrow</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script lang="ts" src="./MaterialTable.ts"/>

<style scoped>

</style>