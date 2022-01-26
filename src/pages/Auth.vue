<template>
  <q-page padding>
    <q-tabs v-model="currentPath" class="text-primary">
      <q-tab
        v-for="{ label, path } in tabs"
        :key="path"
        :name="label"
        :label="label"
      ></q-tab>
    </q-tabs>
    <component :is="component" />
    <!-- <Register /> -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed, defineAsyncComponent } from 'vue';

const tabs = [
  {
    label: 'register',
    path: 'register',
  },
  {
    label: 'login',
    path: 'login',
  },
];

export default defineComponent({
  name: 'Auth',
  setup() {
    const currentPath = ref('register');

    const component = computed(() => {
      if (currentPath.value === 'register') {
        return defineAsyncComponent(
          () => import('src/components/Forms/Register.vue'),
        );
      }
      return defineAsyncComponent(
        () => import('src/components/Forms/Login.vue'),
      );
    });

    return { tabs, currentPath, component };
  },
});
</script>

<style></style>
