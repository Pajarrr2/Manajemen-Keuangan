<template>
  <div class="min-h-screen px-6 pt-6 pb-24 bg-gray-100 text-gray-900">

    <!-- Tombol Kembali -->
    <button @click="$router.back()" class="text-sm text-gray-700 mb-4">
      ‹ Kembali
    </button>

    <!-- Judul -->
    <h1 class="text-2xl font-bold text-gray-900">Kelola Anggaran Bulananmu</h1>
    <p class="text-green-600 font-semibold mt-1">
      Sisa Dana : Rp {{ formatNumber(sisaDana) }}
    </p>

    <!-- Ringkasan Anggaran -->
    <div class="mt-5 bg-white p-4 rounded-xl shadow-sm border border-gray-300">
      <div class="flex justify-between mb-1 text-sm">
        <span class="font-medium text-gray-700">Total Anggaran</span>
        <span class="font-semibold text-gray-900">Rp {{ formatNumber(totalAnggaran) }}</span>
      </div>

      <div class="flex justify-between mb-1 text-sm">
        <span class="font-medium text-gray-700">Total Terpakai</span>
        <span class="font-semibold text-red-600">
          Rp {{ formatNumber(totalTerpakai) }}
        </span>
      </div>

      <ProgressBar :percent="persentase" class="mt-2" />

      <p class="text-xs text-gray-500 mt-1">
        Pemakaian anggaran: {{ Math.round(persentase) }}%
      </p>
    </div>

    <!-- Kategori Pengeluaran -->
    <h2 class="text-lg font-semibold mt-8 mb-3 text-gray-900">Kategori Pengeluaran</h2>

    <div
      v-for="item in listKategori"
      :key="item.nama"
      class="bg-white p-4 rounded-xl shadow-sm border border-gray-300 mb-4"
    >
      <div class="flex justify-between mb-1 text-sm">
        <span class="font-medium text-gray-700">{{ item.nama }}</span>
        <span class="font-semibold text-gray-900">
          Rp {{ formatNumber(item.terpakai) }}
          /
          Rp {{ formatNumber(item.total) }}
        </span>
      </div>

      <ProgressBar :percent="(item.terpakai / item.total) * 100" />
    </div>

    <!-- Bottom Navigation -->
    <BottomNav class="bg-white text-gray-900" />
  </div>
</template>

<script>
import BottomNav from "../../components/BottomNav.vue";
import ProgressBar from "../../components/ProgressBar.vue";

export default {
  components: { BottomNav, ProgressBar },

  data() {
    return {
      listKategori: [
        { nama: "Makan", terpakai: 150000, total: 200000 },
        { nama: "Transportasi", terpakai: 100000, total: 200000 },
        { nama: "Hiburan", terpakai: 40000, total: 100000 },
        { nama: "Belanja", terpakai: 30000, total: 100000 }
      ]
    };
  },

  computed: {
    totalAnggaran() {
      return this.listKategori.reduce((t, k) => t + k.total, 0);
    },
    totalTerpakai() {
      return this.listKategori.reduce((t, k) => t + k.terpakai, 0);
    },
    sisaDana() {
      return this.totalAnggaran - this.totalTerpakai;
    },
    persentase() {
      return (this.totalTerpakai / this.totalAnggaran) * 100;
    }
  },

  methods: {
    formatNumber(num) {
      return num.toLocaleString("id-ID");
    }
  }
};
</script>
