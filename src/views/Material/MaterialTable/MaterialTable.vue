<template>
  <div class="d-flex flex-column">
    <div class="mb-3 d-flex flex-column">
      <v-btn color="primary" @click="$router.push('/material')" class="align-self-start" text outlined>
        <v-icon>mdi-arrow-left</v-icon>
        Select Location
      </v-btn>
      <v-autocomplete
          full-width
          :append-outer-icon="filerIcon"
          append-icon=""
          clearable
          prepend-inner-icon="mdi-magnify"
      >
      </v-autocomplete>
    </div>
    <div>
      <v-row>
        <v-col
            cols="auto"
            md="6"
            lg="3"
            xl="2"
            v-for="n in 50" :key="n"
        >
          <v-hover
              v-slot="{hover}"
              open-delay="180"
              close-delay="100"
          >
            <v-card
                :elevation="hover ? 12 : 2"
                height="auto"
                @click="openItem()"
            >
              <v-card-subtitle>Category</v-card-subtitle>
              <div class="justify-center d-flex">
                <v-icon box>mdi-sitemap</v-icon>
              </div>
              <v-card-title>
                <v-fab-transition
                    leave-absolute
                    hide-on-leave
                >
                  <v-btn
                      v-if="hover"
                      fab
                      absolute
                      top
                      right
                      small
                      text
                      outlined
                      color="primary"
                  >
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </v-fab-transition>
                Item Name
              </v-card-title>
              <v-card-text class="d-flex flex-wrap">
                <v-chip v-ripple="false" class="ma-1" v-for="n in Math.floor(Math.random()*3+4)" :key="n">Tag {{
                    n
                  }}
                </v-chip>
              </v-card-text>
              <v-card-actions>
                <v-btn block color="primary" text>Borrow</v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </div>
    <v-slide-y-transition>
      <v-btn
          fab
          fixed
          bottom
          right
          color="primary"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-slide-y-transition>
    <div class="text-center">
      <v-pagination
          v-model="page"
          :length="13"
          :total-visible="7"
          circle
      ></v-pagination>
    </div>
    <item-form :callback="callback" :dialog="dialog"></item-form>
  </div>
</template>
<script lang="ts" src="./MaterialTable.ts"/>

<style scoped>
</style>