<template>
    <div>
        <h2>CAMPUS AGRÁRIAS</h2>
        <p>Rua dos Funcionarios, 1540 - Juvevê</p>
        <div class="d-flex flex-wrap justify-space-around">
        <BoxCurso
            :curso="'AGRONOMIA'"
            :telCoordenacao="'(41) 33505610, (41)33505612'"
            :siteCoordenacao="'www.agronomia.ufpr.br'"
            :emailSecretaria="'agronomia@ufpr.br'"
        />

        <BoxCurso
            :curso="'ENGENHARIA FLORESTAL'"
            :telCoordenacao="'(41) 33604206'"
            :siteCoordenacao="'www.floresta.ufpr.br'"
            :emailSecretaria="'floresta@ufpr.br'"
        />

        <BoxCurso
            :curso="'ENGENHARIA INDUSTRIAL MADEIREIRA'"
            :telCoordenacao="'(41) 33604306'"
            :siteCoordenacao="'www.madeira.ufpr.br/ceim'"
            :emailSecretaria="'cceim@ufpr.br'"
        />

        <BoxCurso
            :curso="'MEDICINA VETERINÁRIA'"
            :telCoordenacao="'(41) 33505615, (41)33505782'"
            :siteCoordenacao="'www.ccmv.ufpr.br'"
            :emailSecretaria="'ccmv@ufpr.br'"
        />

        <BoxCurso
            :curso="'ZOOTECNIA'"
            :telCoordenacao="'(41) 33505669'"
            :siteCoordenacao="'www.ccz.agrarias.ufpr.br'"
            :emailSecretaria="'cursozootecnia.saude@ufpr.br'"
        />

        </div>
    </div>
</template>

<script>
import BoxCurso from '@/components/boxCursos.vue';

export default {
  name: 'Agrarias',
  components: { BoxCurso },
};
</script>

<style>

</style>
