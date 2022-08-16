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
            v-for="(n) in 20" :key="n">
          <v-hover
              v-slot="{hover}"
              close-delay="150"
          >
            <v-card
                :elevation="hover ? 12 : 2"
                class="transition-linear-out-slow-in"
                height="auto"
            >
              <v-card-subtitle>Category</v-card-subtitle>
              <v-img
                  :src="`https://picsum.photos/300/300?image=${n * 6 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 6 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                  >
                    <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-card-title>
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
              <v-fab-transition
                  origin="center center"
              >
                <v-speed-dial
                    transition="slide-y-transition"
                    open-on-hover
                    absolute
                    top
                    v-if="hover"
                    right
                    origin="center center"
                    direction="bottom"
                >
                  <template v-slot:activator>
                    <v-tooltip right>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            color="secondary"
                            fab
                            small
                            v-bind="attrs"
                            v-on="on"
                        >
                          <v-icon>
                            mdi-dots-horizontal
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>More</span>
                    </v-tooltip>
                  </template>
                  <v-tooltip right>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          fab
                          dark
                          small
                          color="primary"
                          v-bind="attrs"
                          v-on="on"
                          @click="openItem('itemId')"
                      >
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>
                    </template>
                    <span>Edit</span>
                  </v-tooltip>
                  <v-tooltip right>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          fab
                          dark
                          small
                          color="warning"
                          v-bind="attrs"
                          v-on="on"
                      >
                        <v-icon>mdi-comment-alert</v-icon>
                      </v-btn>
                    </template>
                    <span>Report Broken Item</span>
                  </v-tooltip>
                  <v-tooltip right>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          fab
                          dark
                          small
                          color="error"
                          v-bind="attrs"
                          v-on="on"
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </template>
                    <span>Delete</span>
                  </v-tooltip>
                </v-speed-dial>
              </v-fab-transition>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </div>
    <v-btn
        fab
        fixed
        bottom
        right
        color="primary"
        @click="openItem('')"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <div class="text-center">
      <v-pagination
          v-model="page"
          :length="13"
          :total-visible="7"
          circle
      ></v-pagination>
    </div>
    <item-form :callback="callback" :update="update" :editing="currentItem" :dialog="dialog"></item-form>
  </div>
</template>
<script lang="ts" src="./MaterialTable.ts"/>

<style scoped>
</style>