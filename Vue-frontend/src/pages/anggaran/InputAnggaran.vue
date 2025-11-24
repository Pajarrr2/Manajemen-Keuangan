<template>
<div class="min-h-screen px-6 pt-6 pb-20 bg-white">
<h1 class="text-2xl font-bold mb-6">Kelola Anggaran Bulananmu</h1>


<label class="text-sm mb-2 block">Jumlah Dana</label>
<input type="number" placeholder="400000" v-model="jumlahDana"
class="w-full border border-gray-300 rounded-full px-4 py-2 mb-6 focus:outline-green-600" />


<button @click="goToDetail"
class="w-full bg-green-600 text-white py-2 rounded-full text-center text-sm">
Konfirmasi
</button>


<BottomNav />
</div>
</template>


<script>
import BottomNav from "../../components/BottomNav.vue";
import { useRouter } from "vue-router";


export default {
components: { BottomNav },
data() {
return { jumlahDana: "" };
},
setup() {
const router = useRouter();
const goToDetail = () => {
router.push("/anggaran/detail");
};
return { goToDetail };
}
};
</script>