<template>
<div class="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
<div :style="{ width: percent + '%' }" class="h-full bg-green-600"></div>
</div>
</template>


<script>
export default {
props: {
percent: { type: Number, required: true }
}
};
</script>