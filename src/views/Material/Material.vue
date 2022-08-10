<template>
  <div>
    <h1>Material</h1>
    <v-slide-x-transition
        leave-absolute
        hide-on-leave
    >
      <router-view></router-view>
    </v-slide-x-transition>
  </div>
</template>

<script lang="ts" src="./Material.ts"/>
<style>
.map {
  height: 300px;
  width: 100%;
}
</style>
