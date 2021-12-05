<template>
    <div class="mx-4">
        <h1>Restaurantes Universitarios</h1>
        <div>
            <h2>RU CENTRAL</h2>
            <p>Junto à Reitoria</p>
            <div class="days-restaurante">
                <box-restaurantes
                  :diaSemana="'Segunda à Sexta'"
                  :horarioCafe="'06:45 às 08:00'"
                  :horarioAlmoco="'11:15 às 13:30'"
                  :horarioJanta="'17:45 às 19:30'"
                />

                <box-restaurantes
                  :diaSemana="'Sábado:'"
                  :horarioCafe="'07:30 às 08:30'"
                  :horarioAlmoco="'11:30 às 13:15'"
                  :horarioJanta="'17:45 às 19:30'"
                />

                <box-restaurantes
                  :diaSemana="'Domingo:'"
                  :horarioCafe="'08:30 às 09:30'"
                  :horarioAlmoco="'11:15 às 13:00'"
                  :horarioJanta="'17:45 às 19:00'"
                />

            </div>
        </div>

        <h2>RU CENTRO POLITECNICO</h2>
        <p>Localizado no campus do Politécnico</p>
            <div class="days-restaurante">
                <box-restaurantes
                  :diaSemana="'Segunda à Sexta'"
                  :horarioCafe="'06:45 às 08:00'"
                  :horarioAlmoco="'11:00 às 13:30'"
                  :horarioJanta="'17:30 às 19:30'"
                />

            </div>
        <h2>RU AGRÁRIAS</h2>
        <p>Localizado no campos do Setor de Ciências Agrárias</p>
            <div class="days-restaurante">
                <box-restaurantes
                  :diaSemana="'Segunda à Sexta'"
                  :horarioCafe="'06:45 às 08:00'"
                  :horarioAlmoco="'11:30 às 13:00'"
                  :horarioJanta="'Não há :('"
                />

            </div>
        <h2>RU JARDIM BOTANICO</h2>
        <p>Localizado no campus do Setor de Ciências Sociais Aplicadas</p>
            <div class="days-restaurante">
                <box-restaurantes
                  :diaSemana="'Segunda à Sexta'"
                  :horarioCafe="'06:45 às 08:00'"
                  :horarioAlmoco="'11:00 às 13:30'"
                  :horarioJanta="'17:30 às 19:30'"
                />

            </div>
    </div>
</template>

<script>
import BoxRestaurantes from '@/components/boxRestaurantes.vue';

export default {
  name: 'Restaurantes',
  components: { BoxRestaurantes },
};
</script>

<style>
    .days-restaurante{
        display: flex;
        justify-content: center;
        margin: 0 0 100px 0;
    }

    @media screen and (max-width: 700px) {
        .days-restaurante {
        display: flex;
        flex-direction: column;
        }
    }
</style>
