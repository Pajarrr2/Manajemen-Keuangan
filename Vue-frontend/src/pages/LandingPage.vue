<template>
<div class="min-h-screen px-6 pt-4 pb-10 bg-white">
<!-- NAVBAR -->
<Navbar />


<!-- HERO TEXT -->
<div class="mt-10">
<h1 class="text-3xl font-bold leading-tight mb-4">
Kendalikan<br />
Pengeluaranmu,<br />
Sekarang Juga!
</h1>


<p class="text-sm text-gray-700 mb-6">
Temukan cara cerdas mengatur uang di saat semuanya mahal
</p>


<button class="bg-green-600 text-white px-5 py-2 rounded-full text-sm shadow-md">
Mulai Sekarang
</button>
</div>
</div>
</template>


<script>
import Navbar from "../components/Navbar.vue";


export default {
components: { Navbar }
};
</script>