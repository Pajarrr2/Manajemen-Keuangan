import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "../pages/LandingPage.vue";

// Anggaran
import InputAnggaran from "../pages/anggaran/InputAnggaran.vue";
import DetailAnggaran from "../pages/anggaran/DetailAnggaran.vue";

// Target Tabungan
import InputTarget from "../pages/target/InputTarget.vue";
import DetailTarget from "../pages/target/DetailTarget.vue";

const routes = [
  { path: "/", component: LandingPage },

  // Anggaran
  { path: "/anggaran", component: InputAnggaran },
  { path: "/anggaran/detail", component: DetailAnggaran },

  // Target Tabungan
  { path: "/target", component: InputTarget },
  { path: "/target/detail", component: DetailTarget },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
