<template>
    <div>
        <h2>CAMPUS HC</h2>
        <p>Rua Padre Camargo, 280 - Centro</p>
        <div class="d-flex flex-wrap justify-space-around">
        <BoxCurso
            :curso="'ENFERMAGEM'"
            :telCoordenacao="'(41) 33607242, (41)33613752'"
            :siteCoordenacao="'www.enfermagem.ufpr.br'"
            :emailSecretaria="'coordenf@ufpr.br'"
        />

        <BoxCurso
            :curso="'MEDICINA'"
            :telCoordenacao="'(41) 33607239, (41) 33607283'"
            :siteCoordenacao="'www.medicina.ufpr.br'"
            :emailSecretaria="'medicina@ufpr.br'"
        />

        <BoxCurso
            :curso="'TERAPIA OCUPACIONAL'"
            :telCoordenacao="'(41) 33613746, (41)33613748'"
            :siteCoordenacao="'www.saude.ufpr.br'"
            :emailSecretaria="'terapiaocupacional.saude@ufpr.br'"
        />

        </div>
    </div>
</template>

<script>
import BoxCurso from '@/components/boxCursos.vue';

export default {
  name: 'Hc',
  components: { BoxCurso },
};
</script>

<style>

</style>
