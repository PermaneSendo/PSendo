import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import ManualCalouro from '../views/ManualCalouro.vue';
import Restaurantes from '../views/ManualCalouroViews/Restaurantes.vue';
import Campus from '../views/ManualCalouroViews/Campus.vue';
import SantosAndrade from '../views/ManualCalouroViews/Campus/SantosAndrade.vue';
import Juveve from '../views/ManualCalouroViews/Campus/Juveve.vue';
import Batel from '../views/ManualCalouroViews/Campus/Batel.vue';
import Hc from '../views/ManualCalouroViews/Campus/Hc.vue';
import Agrarias from '../views/ManualCalouroViews/Campus/Agrarias.vue';
import Reitoria from '../views/ManualCalouroViews/Campus/Reitoria.vue';
import JardimBotanico from '../views/ManualCalouroViews/Campus/JardimBotanico.vue';
import CentroPolitecnico from '../views/ManualCalouroViews/Campus/CentroPolitecnico.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sobre',
    name: 'About',
    component: About,
  },
  {
    path: '/manual-calouro',
    name: 'ManualCalouro',
    component: ManualCalouro,
  },
  {
    path: '/manual-calouro/restaurantes',
    component: Restaurantes,
  },
  {
    path: '/manual-calouro/campus',
    component: Campus,
    children: [
      {
        path: 'santos-andrade',
        name: 'SantosAndrade',
        component: SantosAndrade,
      },
      {
        path: 'juveve',
        component: Juveve,
      },
      {
        path: 'batel',
        component: Batel,
      },
      {
        path: 'hc',
        component: Hc,
      },
      {
        path: 'agrarias',
        component: Agrarias,
      },
      {
        path: 'reitoria',
        component: Reitoria,
      },
      {
        path: 'jardim-botanico',
        component: JardimBotanico,
      },
      {
        path: 'centro-politecnico',
        component: CentroPolitecnico,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
