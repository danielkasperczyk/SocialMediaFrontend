<template>
  <q-layout view="lHh Lpr lFf">
    <TheHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
    <TheCreateDialog v-model="showDialog" />
    <TheFooter @showDialog="showDialog = !showDialog" />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import TheHeader from 'src/components/MainLayout/TheHeader.vue';
import TheFooter from 'src/components/MainLayout/TheFooter.vue';
import TheCreateDialog from 'src/components/MainLayout/TheCreateDialog.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    TheHeader,
    TheFooter,
    TheCreateDialog,
  },
  setup() {
    const showDialog = ref(false);

    return { showDialog };
  },
});
</script>
