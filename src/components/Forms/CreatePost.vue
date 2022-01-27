<template>
  <q-form @submit="createPost(form)">
    <q-input
      v-model="form.description"
      :label="$t('inputs.description')"
      :loading="loading"
    ></q-input>
    <q-file
      v-model="form.images"
      :label="$t('inputs.images')"
      :loading="loading"
      max-files="10"
      accept="image/*"
      clearable
      multiple
    >
      <template v-slot:file="{ file }">
        <p class="q-mb-none text-no-wrap">{{ file.name }}</p>
      </template>
    </q-file>
    <q-btn
      :label="$t('post.add')"
      :loading="loading"
      type="submit"
      color="primary"
      class="q-mt-md"
      rounded
    ></q-btn>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import usePost from 'src/composables/usePosts';

type Form = {
  description: string;
  images: File[];
};

export default defineComponent({
  name: 'CreatePost',

  setup() {
    const { loading, createPost } = usePost();
    const form: Form = reactive({
      description: '',
      images: [],
    });

    return {
      form,
      loading,
      createPost,
    };
  },
});
</script>

<style></style>
