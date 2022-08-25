<template>
  <div class="d-flex flex-row justify-start">
    <v-card
        class="ma-3"
        v-for="group in groups"
        :key="group"
    >
      <v-chip
          v-if="activeGroup === group"
          color="success"
      >
        <i>
          Active
        </i>
      </v-chip>
      <v-card-title>
        <span>{{ group.name }}</span>
      </v-card-title>
      <v-card-text>
        {{ group.description }}
      </v-card-text>
      <v-card-actions>
        <v-btn
            color="primary"
            rounded
            block
            @click="activeGroup = group"
        >
          {{ "Go to group" }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts" src="./GroupOverview.ts"/>

<style scoped>

</style>