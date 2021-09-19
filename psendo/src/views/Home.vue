<template>
  <div class="container">
    <div class="align-img-center">
      <v-img
        max-height="60%"
        max-width="30%"
        alt="a palavra permanesendo ao redor de pessoas unidas"
        src="../assets/LOGO_psendo-removebg-preview.png">
      </v-img>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Home',

};
</script>

<style scoped>
  .container {
    background-color: var(--creme);
    width: 100%;
  }
  .align-img-center {
    width: 100%;
    display: flex;
    justify-content: center;

  }
</style>
