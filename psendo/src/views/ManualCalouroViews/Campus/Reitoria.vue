<template>
    <div>
        <h2>CAMPUS REITORIA</h2>
        <p>Rua General Carneiro, 460 - Centro</p>
        <div class="d-flex flex-wrap justify-space-around">
        <BoxCurso
            :curso="'CIÊNCIAS SOCIAIS'"
            :telCoordenacao="'(41) 33605085'"
            :siteCoordenacao="'www.humanas.ufpr.br/portal/cienciassociais'"
            :emailSecretaria="'csociais@ufpr.br'"
        />

        <BoxCurso
            :curso="'DESIGN'"
            :telCoordenacao="'(41) 33605360'"
            :siteCoordenacao="'www.design.ufpr.br'"
            :emailSecretaria="'coordi@ufpr.br'"
        />

        <BoxCurso
            :curso="'FILOSOFIA'"
            :telCoordenacao="'(41) 33605266'"
            :siteCoordenacao="'www.filosofia.ufpr.br'"
            :emailSecretaria="'coord.filosofia@ufpr.br'"
        />

        <BoxCurso
            :curso="'HISTÓRIA'"
            :telCoordenacao="'(41) 33605105, (41) 33605135'"
            :siteCoordenacao="'www.humanas.ufpr.br/portal/historia'"
            :emailSecretaria="'dehis@ufpr.br'"
        />

        <BoxCurso
            :curso="'LETRAS'"
            :telCoordenacao="'(41) 33605096'"
            :siteCoordenacao="'www.humanas.ufpr.br/portal/letras'"
            :emailSecretaria="'ciet@ufpr.br'"
        />

        <BoxCurso
            :curso="'PEDAGOGIA'"
            :telCoordenacao="'(41) 33605206, (41)33605207'"
            :siteCoordenacao="'www.educacao.ufpr.br'"
            :emailSecretaria="'pedagogia@ufpr.br'"
        />

        <BoxCurso
            :curso="'TURISMO'"
            :telCoordenacao="'(41) 33605231'"
            :siteCoordenacao="'www.turismo.ufpr.br'"
            :emailSecretaria="'ctur@ufpr.br'"
        />
        </div>
    </div>
</template>

<script>
import BoxCurso from '@/components/boxCursos.vue';

export default {
  name: 'Reitoria',
  components: { BoxCurso },
};
</script>

<style>

</style>
