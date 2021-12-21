<template>
  <v-app>
    <header class="navbar">
      <router-link to="/" class="router-link">HOME PAGE</router-link>
      <router-link to="/manual-calouro" class="router-link">MANUAL DO CALOURO</router-link>
      <router-link to="/sobre" class="router-link">CONTATO</router-link>
    </header>

    <v-main class="main-content">
      <router-view to="/">Home</router-view>
    </v-main>

    <v-footer
      padless
      class="bg-c-yellow"
    >
      <v-card
        flat
        tile
        class="bg-c-yellow text-center"
        style="width: 100%;"
      >
        <div class="d-flex justify-center my-3">
          <div>
            <v-btn
              @click="goToPage(facebook)"
              class="mx-4"
              icon
            >
              <v-icon size="24px" color="black">
                mdi-facebook
              </v-icon>
            </v-btn>
          </div>

          <div>
            <v-btn
              @click="goToPage(instagram)"
              class="mx-4"
              icon
            >
              <v-icon size="24px"  color="black"> mdi-instagram </v-icon>
            </v-btn>
          </div>

          <div>
            <v-btn
              style="cursor:default"
              class="mx-4"
              icon
            >
              <v-img
              size="24px"
              max-height="32px"
              max-width="48px"
              alt="a palavra permanesendo ao redor de pessoas unidas"
              src="@/assets/marca_UFPR.png">
              </v-img>
            </v-btn>
          </div>
        </div>
        <div class="black--text">
          <p>PermaneSendo</p>
          <p>De aluno para aluno</p>
        </div>

        <v-divider></v-divider>

        <v-card-text class="black--text">
          2014 - {{ new Date().getFullYear() }}
        </v-card-text>
      </v-card>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  data() {
    return {
      instagram: 'https://www.instagram.com/permanesendo/',
      facebook: 'https://www.facebook.com/PermaneSENDO/',
    };
  },
  methods: {
    goToPage(iconClick) {
      window.open(iconClick, '_blank').focus();
    },
  },
};
</script>

<style scoped>
@import 'assets/variables.css';
  .main-content {
    background-color: var(--creme);
  }

  .bg-c-yellow {
    background-color: var(--amarelo) !important;
  }

  .navbar {
    background-color: var(--amarelo);
    display: flex;
    justify-content: center;
  }
  .navbar .router-link {
    background-color: var(--creme);
    padding: 5px 10px;
    margin: 10px 10px;
    border-radius: 4px;
    text-decoration: none;
    color: var(--preto);
  }
  .navbar .router-link:hover {
    background-color: rgb(0,0,0,0.05);
    transition-duration: 0.3s;
  }

</style>
