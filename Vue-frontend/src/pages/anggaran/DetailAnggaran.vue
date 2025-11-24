<template>
<div class="min-h-screen px-6 pt-6 pb-20 bg-white">
<button @click="$router.back()" class="text-sm mb-4">‹ Kembali</button>


<h1 class="text-2xl font-bold">Kelola Anggaran Bulananmu</h1>
<p class="text-green-600 font-semibold mt-1">Sisa Dana : 2.350.000</p>


<ProgressBar :percent="70" class="mt-4 mb-6" />


<div v-for="item in listKategori" :key="item.nama" class="mb-4">
<div class="flex justify-between text-sm mb-1">
<span>{{ item.nama }}</span>
<span>RP. {{ item.terpakai }} / {{ item.total }}</span>
</div>
<ProgressBar :percent="(item.terpakai / item.total) * 100" />
</div>


<BottomNav />
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
}
};
</script>