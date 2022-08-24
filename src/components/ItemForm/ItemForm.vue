<template>
  <v-dialog
      v-model="dialog"
      width="500"
      @click:outside="close()"
      @keydown.esc="close()"
      overlay-opacity="0.1"
      persistent
  >
    <v-card>
      <v-form>
        <v-card-title class="d-flex">
          <h1 v-if="creating" class="headline">Add Item</h1>
          <h1 @click="item.title.edit = true" v-else-if="!item.title.edit">{{ item.title.value }}</h1>
        </v-card-title>
        <v-card-text>
          <v-text-field
              v-model="item.title.value"
              :label="item.title.label"
              required
              v-if="item.title.edit || creating"
              :append-icon="creating?null:'mdi-check'"
              :append-outer-icon="creating?null:'mdi-close'"
              @change="item.title.edit = true"
              @click:append-outer="item.title.edit = false"
              @click:append="() => {
                update().then(() => {
                  item.title.edit = false;
                });
              }"
          ></v-text-field>
          <v-textarea
              v-model="item.description.value"
              label="Description"
              required
              v-if="item.description.edit || creating"
              :append-icon="creating?null:'mdi-check'"
              :append-outer-icon="creating?null:'mdi-close'"
              @change="item.description.edit = true"
              @click:append-outer="item.description.edit = false"
              @click:append="() => {
                update(item)
                item.description.edit = false
              }"
              counter="400"
          ></v-textarea>
          <p @click="item.description.edit = true" v-else>{{ item.description.value }}</p>
          <v-autocomplete
              v-model="item.tags.value"
              :items="tags"
              auto-select-first
              :append-icon="'mdi-plus'"
              :return-object="true"
              :search-input.sync="searchInput"
              @click:append="addTag(searchInput)"
              @keydown.enter="addTag(searchInput)"
              hide-no-data
              hide-selected
              chips
              deletable-chips
              multiple
              label="Tags"
          >

          </v-autocomplete>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn @click="close()">Cancel</v-btn>
          <v-btn v-if="creating" color="primary" @click="create()">Create</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <v-dialog
        v-model="prompt"
        persistent
    >
      <v-card>
        <v-card-title class="d-flex">
          <h1>Discard changes</h1>
        </v-card-title>
        <v-card-text>
          <p>Are you sure you want to discard your changes?</p>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn @click="closePrompt">Cancel</v-btn>
          <v-btn color="danger" @click="close(true)">Discard</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-dialog>
</template>

<script lang="ts" src="./ItemForm.ts"/>

<style scoped>

</style>