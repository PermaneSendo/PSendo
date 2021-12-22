<template>
    <div class="pa-3 mx-5 my-3 rounded-xl range-day">
        <h3 class="pb-3">{{ nameServico }}</h3>
        <p> {{ tipoServico }}</p>
        <p>Contato: {{ contatoServico }}</p>
    </div>
</template>
<script>

export default {
  name: 'BoxCurso',
  props: {
    nameServico: {
      type: String,
      default: null,
    },
    tipoServico: {
      type: String,
      default: null,
    },
    contatoServico: {
      type: String,
      default: null,
    },
  },
};
</script>
<style scoped>
  .range-day {
    background-color: #a9d8ca;
  }

  .range-day:hover {
    background-color: #5deec2;
    transition: 0.2s;
  }

  @media screen and (max-width: 700px) {
    .range-day {
      margin: 10px 0px;
    }
  }
</style>
