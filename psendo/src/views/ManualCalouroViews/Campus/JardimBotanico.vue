<template>
    <div>
        <h2>CAMPUS JARDIM BOTÂNICO</h2>
        <p>Av. Pref. Lothario Meissner, 632 - Jd Botânico</p>
        <div class="d-flex flex-wrap justify-space-around">
        <BoxCurso
            :curso="'ADMINISTRAÇÃO'"
            :telCoordenacao="'(41) 33604366'"
            :siteCoordenacao="'www.adm.ufpr.br'"
            :emailSecretaria="'cursoadm@ufpr.br'"
        />

        <BoxCurso
            :curso="'CIÊNCIAS CONTÁBEIS'"
            :telCoordenacao="'(41) 33604414'"
            :siteCoordenacao="'www.contabeis.ufpr.br'"
            :emailSecretaria="'decont@ufpr.br'"
        />

        <BoxCurso
            :curso="'CIÊNCIAS ECONÔMICAS'"
            :telCoordenacao="'(41) 33603360, (41)33604356'"
            :siteCoordenacao="'www.economia.ufpr.br'"
            :emailSecretaria="'coordeco@ufpr.br'"
        />

        <BoxCurso
            :curso="'FARMÁCIA'"
            :telCoordenacao="'(41) 33604099'"
            :siteCoordenacao="'www.farmacia.ufpr.br'"
            :emailSecretaria="'dehis@ufpr.br'"
        />

        <BoxCurso
            :curso="'GESTÃO DA INFORMAÇÃO'"
            :telCoordenacao="'(41) 33604389'"
            :siteCoordenacao="'www.sociaisaplicadas.ufpr.br/portal/decigi/'"
            :emailSecretaria="'gestinf@ufpr.br'"
        />

        <BoxCurso
            :curso="'NUTRIÇÃO'"
            :telCoordenacao="'(41) 33604056, (41)33604003'"
            :siteCoordenacao="'www.nutricao.ufpr.br'"
            :emailSecretaria="'coonutri@ufpr.br'"
        />

        <BoxCurso
            :curso="'ODONTOLOGIA'"
            :telCoordenacao="'(41) 33604053'"
            :siteCoordenacao="'www.odontologia.ufpr.br'"
            :emailSecretaria="'coord.odontologia@ufpr.br'"
        />
        </div>
    </div>
</template>

<script>
import BoxCurso from '@/components/boxCursos.vue';

export default {
  name: 'JardimBotanico',
  components: { BoxCurso },
};
</script>

<style>

</style>
