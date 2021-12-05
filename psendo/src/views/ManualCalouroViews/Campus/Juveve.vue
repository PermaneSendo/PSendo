<template>
    <div>
        <h2>CAMPUS JUVEVÊ</h2>
        <p>Rua Bom Jesus, 650 - Juvevê</p>
        <div class="d-flex flex-wrap justify-space-around">
        <BoxCurso
            :curso="'COMUNICAÇÃO SOCIAL'"
            :telCoordenacao="'(41) 33132019'"
            :siteCoordenacao="'www.humanas.ufpr.br/portal/comunicacao'"
            :emailSecretaria="'ccos@ufpr.br'"
        />

        </div>
    </div>
</template>

<script>
import BoxCurso from '@/components/boxCursos.vue';

export default {
  name: 'Juveve',
  components: { BoxCurso },
};
</script>

<style>

</style>
