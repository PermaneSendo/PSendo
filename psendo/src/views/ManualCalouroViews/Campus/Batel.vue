<template>
    <div>
        <h2>CAMPUS BATEL</h2>
        <p>Rua Coronel Dulcídio, 638 - Batel</p>
        <div class="d-flex flex-wrap justify-space-around">
        <BoxCurso
            :curso="'ARTES VISUAIS'"
            :telCoordenacao="'(41) 33077302'"
            :siteCoordenacao="'www.sacod.ufpr.br/portal/artes/'"
            :emailSecretaria="'artesvisuais@ufpr.br'"
        />

        <BoxCurso
            :curso="'MÚSICA'"
            :telCoordenacao="'(41) 33077301'"
            :siteCoordenacao="'www.sacod.ufpr.br/portal/artes/'"
            :emailSecretaria="'cmus@ufpr.br'"
        />

        </div>
    </div>
</template>

<script>
import BoxCurso from '@/components/boxCursos.vue';

export default {
  name: 'Batel',
  components: { BoxCurso },
};
</script>

<style>

</style>
