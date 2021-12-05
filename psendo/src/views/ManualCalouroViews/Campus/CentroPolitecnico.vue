<template>
    <div>
        <h2>CAMPUS CENTRO POLITÉCNICO</h2>
        <p>Av. Cel. Francisco H. dos Santos, 100 - Jd das Américas</p>
        <div class="d-flex flex-wrap justify-space-around">
        <BoxCurso
            :curso="'ARQUITETURA E URBANISMO'"
            :telCoordenacao="'(41) 33613085'"
            :siteCoordenacao="'www.cau.ufpr.br'"
            :emailSecretaria="'ccau@ufpr.br'"
        />

        <BoxCurso
            :curso="'BIOMEDICINA'"
            :telCoordenacao="'(41) 33611744'"
            :siteCoordenacao="'www.bio.ufpr.br/portal/biomedicina'"
            :emailSecretaria="'biomedicina@ufpr.br'"
        />

        <BoxCurso
            :curso="'CIÊNCIAS BIOLÓGICAS'"
            :telCoordenacao="'(41) 33611795'"
            :siteCoordenacao="'www.bio.ufpr.br/portal/cbio'"
            :emailSecretaria="'cbio@ufpr.br, cbionoite@ufpr.br'"
        />

        <BoxCurso
            :curso="'CIÊNCIA DA COMPUTAÇÃO'"
            :telCoordenacao="'(41) 33613566'"
            :siteCoordenacao="'www.inf.ufpr.br/bcc'"
            :emailSecretaria="'bcc@inf.ufpr.br'"
        />

        <BoxCurso
            :curso="'EDUCAÇÃO FÍSICA'"
            :telCoordenacao="'(41) 33611699'"
            :siteCoordenacao="'www.bio.ufpr.br/portal/educacao-fisica'"
            :emailSecretaria="'coordenacao.edf@ufpr.br'"
        />

        <BoxCurso
            :curso="'ENGENHARIA AMBIENTAL'"
            :telCoordenacao="'(41) 33613012'"
            :siteCoordenacao="'www.dea.ufpr.br'"
            :emailSecretaria="'eng.amb@ufpr.br'"
        />

        <BoxCurso
            :curso="'ENGENHARIA CARTOGRÁFICA'"
            :telCoordenacao="'(41) 33613038'"
            :siteCoordenacao="'www.cartografica.ufpr.br'"
            :emailSecretaria="'carto.ufpr@gmail.com'"
        />

        <BoxCurso
            :curso="'ENGENHARIA CIVIL'"
            :telCoordenacao="'(41) 33613044, (41)33613046'"
            :siteCoordenacao="'www.civil.ufpr.br'"
            :emailSecretaria="'engcivil@ufpr.br'"
        />

        <BoxCurso
            :curso="'ENGENHARIA DA PRODUÇÃO'"
            :telCoordenacao="'(41) 33613398'"
            :siteCoordenacao="'www.engprod.ufpr.br'"
            :emailSecretaria="'engprodufpr@gmail.com'"
        />

        <BoxCurso
            :curso="'ENGENHARIA DE BIOPROCESSOS E BIOTECNOLOGIA'"
            :telCoordenacao="'(41) 33613055'"
            :siteCoordenacao="'www.daebb.ufpr.br'"
            :emailSecretaria="'bioeng@ufpr.br'"
        />

        <BoxCurso
            :curso="'ENGENHARIA ELÉTRICA'"
            :telCoordenacao="'(41) 33613223'"
            :siteCoordenacao="'www.eletrica.ufpr.br'"
            :emailSecretaria="'engeletrica@ufpr.br'"
        />

        <BoxCurso
            :curso="'ENGENHARIA MECÂNICA'"
            :telCoordenacao="'(41) 33613131'"
            :siteCoordenacao="'demec.ufpr.br'"
            :emailSecretaria="'ccem@ufpr.br'"
        />

        <BoxCurso
            :curso="'ENGENHARIA QUÍMICA'"
            :telCoordenacao="'(41) 33613057, (41) 33613056'"
            :siteCoordenacao="'www.tecnologia.ufpr.br/portal/cceq'"
            :emailSecretaria="'cceq@ufpr.br'"
        />

        <BoxCurso
            :curso="'ESTATÍSTICA'"
            :telCoordenacao="'(41) 33613025'"
            :siteCoordenacao="'www.coordest.ufpr.br'"
            :emailSecretaria="'dest@ufpr.br'"
        />

        <BoxCurso
            :curso="'EXPRESSÃO GRÁFICA'"
            :telCoordenacao="'(41) 33613039'"
            :siteCoordenacao="'www.degraf.ufpr.br'"
            :emailSecretaria="'cegraf@ufpr.br'"
        />

        <BoxCurso
            :curso="'FISIOTERAPIA'"
            :telCoordenacao="'(41) 33611699'"
            :siteCoordenacao="'www.bio.ufpr.br/portal/fisioterapia'"
            :emailSecretaria="'cfisio@ufpr.br'"
        />

        <BoxCurso
            :curso="'FÍSICA'"
            :telCoordenacao="'(41) 33613094'"
            :siteCoordenacao="'fisica.ufpr.br'"
            :emailSecretaria="'secretaria@fisica.ufpr.br'"
        />

        <BoxCurso
            :curso="'GEOGRAFIA'"
            :telCoordenacao="'(41) 33613171'"
            :siteCoordenacao="'geografia.ufpr.br'"
            :emailSecretaria="'ccgeog@ufpr.br'"
        />

        <BoxCurso
            :curso="'GEOLOGIA'"
            :telCoordenacao="'(41) 33613386'"
            :siteCoordenacao="'www.geologia.ufpr.br'"
            :emailSecretaria="'ccgeologia@ufpr.br'"
        />

        <BoxCurso
            :curso="'INFORMATICA BIOMÉDICA'"
            :telCoordenacao="'(41) 33613572'"
            :siteCoordenacao="'web.inf.ufpr.br/infobiomedica/'"
            :emailSecretaria="'ibm@inf.ufpr.br'"
        />

        <BoxCurso
            :curso="'MATEMÁTICA'"
            :telCoordenacao="'(41) 33613032'"
            :siteCoordenacao="'www.mat.ufpr.br/graduacao/matematica'"
            :emailSecretaria="'coordenacao.mat.ufpr@gmail.com'"
        />

        <BoxCurso
            :curso="'MATEMÁTICA INDUSTRIAL'"
            :telCoordenacao="'(41) 33613353'"
            :siteCoordenacao="'www.mat.ufpr.br/graduacao/matind'"
            :emailSecretaria="'cmind@ufpr.br'"
        />

        <BoxCurso
            :curso="'QUÍMICA'"
            :telCoordenacao="'(41) 33613396'"
            :siteCoordenacao="'www.quimica.ufpr.br'"
            :emailSecretaria="'coordenacao.quimica@ufpr.br'"
        />
        </div>
    </div>
</template>

<script>
import BoxCurso from '@/components/boxCursos.vue';

export default {
  name: 'CentroPolitecnico',
  components: { BoxCurso },
};
</script>

<style>

</style>
