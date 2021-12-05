<template>
    <div>
        <h2>CAMPUS SANTOS ANDRADE</h2>
        <p>Praça Santos Andrade, 50 - Centro</p>
        <div class="d-flex flex-wrap justify-space-around">
        <BoxCurso
            :curso="'DIREITO'"
            :telCoordenacao="'(41) 33102744'"
            :siteCoordenacao="'www.direito.ufpr.br'"
            :emailSecretaria="'coordenacaojd@ufpr.br'"
        />

        <BoxCurso
            :curso="'PSICOLOGIA'"
            :telCoordenacao="'(41) 33102624'"
            :siteCoordenacao="'www.humanas.ufpr.br/portal/psicologia'"
            :emailSecretaria="'coorpsic@ufpr.br'"
        />
        </div>
    </div>
</template>

<script>
import BoxCurso from '@/components/boxCursos.vue';

export default {
  name: 'SantosAndrade',
  components: { BoxCurso },
};
</script>

<style>

</style>
