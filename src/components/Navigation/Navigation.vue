<template>
  <v-hover
      close-delay="200"
  >
    <template v-slot:default="{hover}">
      <v-navigation-drawer
          permanent
          :value="drawer=hover"
          :mini-variant.sync="mini"
          app
      >
        <v-list>
          <v-list-item class="px-2">

            <v-list-item-avatar>
              <v-img id="nav-avatar" :src="avatarUrl"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-h6"> {{ user.displayName }}</v-list-item-title>
              <v-list-item-subtitle>
                <v-autocomplete
                    label="Group"
                    dense
                    solo
                    v-model.lazy="currentGroup.id"
                    @change="$store.dispatch('fetchCurrentGroup', currentGroup.id)"
                    :items="groups.map(group => {return {text: group.name, value: group.id}})"
                ></v-autocomplete>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item v-for="item in items" :key="item.title" :to="item.path">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-slide-x-transition
            mode="in-out"
        >
          <v-btn
              v-if="hover"
              color="primary"
              outlined
              x-small
              bottom
              right
              fixed
              fab
              @click="mini = !mini"
          >
            <v-icon>{{ mini ? 'mdi-arrow-right' : 'mdi-arrow-left' }}</v-icon>
          </v-btn>
        </v-slide-x-transition>
      </v-navigation-drawer>
    </template>
  </v-hover>
</template>

<script src="./Navigation.ts" lang="ts"/>
