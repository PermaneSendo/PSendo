<template>
  <v-app>
    <v-navigation-drawer
      app
      class="pt-4"
      color="var(--amarelo)"
      permanent
      expand-on-hover
    >
      <v-list>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="var(--azul)">mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view to="/">Home</router-view>
      <!-- Habilitar codigo abaixo quando rotas forem implementadas
      <router-view to="/about">About</router-view> -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  //
};
</script>

<style scoped>
@import 'assets/variables.css';

</style>
