<template>
    <div>
      <h1 class="mx-6 mt-4">Selecione o campus:</h1>
      <div class="d-flex justify-center">
        <div class="box-campus d-flex justify-center">
            <router-link to="/manual-calouro/campus/agrarias" class="campus-link">
                AGRÁRIAS
            </router-link>
            <router-link to="/manual-calouro/campus/batel" class="campus-link">BATEL</router-link>
            <router-link to="/manual-calouro/campus/jardim-botanico" class="campus-link">
                JARDIM BOTÂNICO
            </router-link>
            <router-link to="/manual-calouro/campus/juveve" class="campus-link">JUVEVÊ</router-link>
            <router-link to="/manual-calouro/campus/hc" class="campus-link">HC</router-link>
            <router-link to="/manual-calouro/campus/centro-politecnico" class="campus-link">
                POLITÉCNICO
            </router-link>
            <router-link to="/manual-calouro/campus/reitoria" class="campus-link">
                REITORIA
            </router-link>
            <router-link to="/manual-calouro/campus/santos-andrade" class="campus-link">
                SANTOS ANDRADE
            </router-link>
        </div>
      </div>
      <div>
        <router-view class="my-8 mx-6"></router-view>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Campus',
};
</script>

<style>
    .box-campus {
        width: 90%;
        background-color: #f3db9f;
        padding: 4px 12px;
        border-radius: 6px;
    }
      @media screen and (max-width: 700px) {
        .box-campus {
            display: flex;
            flex-direction: column;
        }
    }

    .box-campus .campus-link {
        background-color: var(--creme);
        padding: 8px 12px;
        margin: 8px;
        border-radius: 8px;
        text-decoration: none;
        color: var(--preto);
    }

    .box-campus .campus-link:hover {
        background-color: rgb(0,0,0,0.05);
        transition-duration: 0.3s;
    }

</style>
