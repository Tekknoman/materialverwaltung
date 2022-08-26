<template>
  <div class="d-flex flex-row justify-start">
    <v-hover
        v-slot="{hover}"
        v-for="(group, i) in groups"
        :key="i"
        close-delay="150"
    >
      <v-badge
          class="ma-3"
          color="success"
          content="Active"
          :value="group.id === currentGroup.id"
          :dot="!hover"
          overlap
          :offset-x="hover ? 25 : 0"
          transition="scale-transition"
      >
        <v-card
            append
            @click.self.stop
            :to="group.id"
        >
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
                @click.prevent="currentGroup = group"
            >
              {{ "Go to group" }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-badge>
    </v-hover>
    <v-btn
        fab
        fixed
        bottom
        right
        color="primary"
        append
        to="new"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts" src="./GroupOverview.ts"/>

<style scoped>

</style>