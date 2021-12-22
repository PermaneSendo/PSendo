<template>
  <div class="mx-4">
    <h1 class="my-6 mx-4">Serviços à comunidade acadêmica</h1>
      <div class="days-restaurante">
        <box-servicos
          :nameServico="'CASA 3'"
          tipoServico="Atendimento ambulatorial relativos à saúde da comunidade universitária e
          atividades correlatas"
          :contatoServico="'(41) 3361-3066 e 3361-3643'"
        />
        <box-servicos
          :nameServico="'CASA 4'"
          tipoServico="responsável por promover atendimento psicológico, psiquiátrico, odontológico
          e de enfermagem à Comunidade Universitária."
          :contatoServico="' (41) 3350-5776 / 98875-5161'"
        />
        <box-servicos
          :nameServico="'ATENDIMENTO PSICOLOGICO PRAE'"
          tipoServico="Acolhimento e acompanhamento psicologico"
          :contatoServico="'psicoprae@ufpr.br / (41) 3888-7777'"
        />

        </div>
    </div>
</template>

<script>
import BoxServicos from '@/components/boxServicos.vue';

export default {
  name: 'Restaurantes',
  components: { BoxServicos },
};
</script>

<style>
    .days-restaurante{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

</style>
