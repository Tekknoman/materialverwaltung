<template>
  <v-dialog
      v-model="dialog"
      width="500"
      @click:outside="callback(undefined)"
      @keydown.esc="callback(undefined)"
      overlay-opacity="0.1"
  >
    <v-card>
      <v-form>
        <v-card-title>
          <h1 v-if="!editing || editing.length <= 0" class="headline">Add Item</h1>
          <v-text-field
              v-model="item.title.value"
              label="Title"
              required
              v-else-if="item.title.edit"
              append-icon="mdi-check"
              append-outer-icon="mdi-close"
              @click:append-outer="item.title.edit = false"
              @click:append="() => {
                update(item)
                item.title.edit = false;
              }"
          ></v-text-field>
          <h1 @click="item.title.edit = true" v-else>{{ item.title.value }}</h1>
        </v-card-title>
        <v-card-text>
          <v-text-field
              v-model="item.description.value"
              label="Description"
              required
              v-if="item.description.edit"
              append-icon="mdi-check"
              append-outer-icon="mdi-close"
              @click:append-outer="item.description.edit = false"
              @click:append="() => {
                update(item)
                item.description.edit = false
              }"
          ></v-text-field>
          <p @click="item.description.edit = true" v-else>{{ item.description.value }}</p>
        </v-card-text>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" src="./ItemForm.ts"/>

<style scoped>

</style>