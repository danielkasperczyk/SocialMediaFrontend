<template>
  <q-header elevated class="bg-white">
    <q-toolbar> </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'TheHeader',

  setup() {
    const $q = useQuasar();

    const isMobile = computed(() => $q.screen.width <= 1024);

    return { isMobile };
  },
});
</script>

<style></style>
