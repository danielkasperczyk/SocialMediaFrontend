<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="toggleModel"
    :maximized="mazimized"
    :transition-show="mazimized ? 'slide-up' : ''"
    :transition-hide="mazimized ? 'slide-down' : ''"
  >
    <q-card>
      <q-card class="full-width row justify-end">
        <q-btn
          @click="$emit('update:modelValue', false)"
          icon="close"
          class="q-pa-md"
          flat
          rounded
        ></q-btn>
      </q-card>
      <q-card class="q-pa-md">
        <CreatePost />
      </q-card>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import CreatePost from 'src/components/Forms/CreatePost.vue';

export default defineComponent({
  name: 'TheCreateDialog',
  components: {
    CreatePost,
  },
  props: {
    modelValue: {
      type: Boolean,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const toggleModel = (e: boolean) => emit('update:modelValue', e);

    const mazimized = computed(() => true);

    return { mazimized, toggleModel };
  },
});
</script>

<style></style>
