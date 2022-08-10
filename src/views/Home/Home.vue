<template>
  <v-main>
    <h1>Dashboard</h1>
    <v-card>
      <v-card-title>
        <h2>Recapcha Score: {{ recapchaScore }}</h2>
      </v-card-title>
      <v-card-text>
        <v-btn >Reverify</v-btn>
        <v-btn >Submit</v-btn>
      </v-card-text>
    </v-card>

    <v-card max-width="300">
      <v-sparkline
          :value="value"
          :gradient="gradient"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          :stroke-linecap="lineCap"
          :gradient-direction="gradientDirection"
          :fill="fill"
          :type="type"
          :auto-line-width="autoLineWidth"
          auto-draw
      ></v-sparkline>
      <v-card-text>Lorem ipsum dolor est</v-card-text>
    </v-card>
  </v-main>
</template>

<script lang="ts" src="./Home.ts"/>
