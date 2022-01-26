<template>
  <q-layout view="lHh Lpr lFf">
    <TheHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
    <TheFooter />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from 'src/components/MainLayout/TheHeader.vue';
import TheFooter from 'src/components/MainLayout/TheFooter.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    TheHeader,
    TheFooter,
  },
});
</script>
