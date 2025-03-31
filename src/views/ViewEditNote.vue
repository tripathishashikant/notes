<template>
  <h1>Edit Note having id as {{ route.params.id }}</h1>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>