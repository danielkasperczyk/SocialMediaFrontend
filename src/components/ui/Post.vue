<template>
  <q-card style="width: 100%" flat>
    <q-card-section>
      <p class="q-mb-none text-weight-medium">{{ getUser }}</p>
      <p class="q-mb-none">{{ getPostDescription }}</p>
    </q-card-section>
    <q-img :src="getMainImage"></q-img>

    <q-card-section class="row items-center">
      <q-btn round flat icon="favorite_border" class="q-mr-sm"></q-btn>
      <p class="q-mb-none">
        {{ $t('post.likeBy', { amount: getLikes?.likes }) }}
      </p>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IPost } from 'src/services/repositories/Posts';
import usePosts from 'src/composables/usePosts';

export default defineComponent({
  name: 'Post',
  props: {
    post: {
      type: Object as PropType<IPost>,
      required: true,
    },
  },
  setup(props) {
    const { getMainImage, getPostDescription, getUser, getLikes } = usePosts(
      props.post,
    );

    return { getMainImage, getPostDescription, getUser, getLikes };
  },
});
</script>

<style></style>
