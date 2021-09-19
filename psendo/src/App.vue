<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-4"
      color="grey lighten-3"
      mini-variant
    >
      <v-btn elevation="2" style="border-radius: 50%">
        CLICK
      </v-btn>
    </v-navigation-drawer>

    <v-main>
      <router-view to="/">Home</router-view>

      <!-- Habilitar codigo abaixo quando for implementado router
      <router-view to="/about">About</router-view> -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  //
};
</script>
