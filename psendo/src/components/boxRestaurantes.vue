<template>
    <div class="pa-3 mx-5 rounded-xl range-day">
        <h3 class="pb-3">{{ diaSemana }}</h3>
        <p>Café da Manhã: {{ horarioCafe }}</p>
        <p>Almoço: {{ horarioAlmoco }}</p>
        <p>Jantar: {{ horarioJanta }}</p>
    </div>
</template>
<script>

export default {
  name: 'BoxRestaurante',
  props: {
    diaSemana: {
      type: String,
      default: null,
    },
    horarioCafe: {
      type: String,
      default: null,
    },
    horarioAlmoco: {
      type: String,
      default: null,
    },
    horarioJanta: {
      type: String,
      default: null,
    },
  },
};
</script>
<style scoped>
  .range-day {
    background-color: #f3db9f;
  }
  .range-day:hover{
    background-color: var(--amarelo);
    transition: 0.2s;
  }
  @media screen and (max-width: 700px) {
    .range-day {
      margin: 10px 0px;
    }
  }
</style>
