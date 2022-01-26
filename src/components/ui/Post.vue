<template>
  <q-card style="width: 100%">
    <q-card-section>
      <p class="q-mb-none text-weight-medium">{{ getUser }}</p>
      <p class="q-mb-none">{{ getPostDescription }}</p>
    </q-card-section>
    <q-img :src="getMainImage"></q-img>
    <q-card-section>
      <p>
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
