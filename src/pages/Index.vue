<template>
  <q-page class="row items-center justify-evenly">
    <Post v-for="post in posts" :key="post._id" :post="post" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import usePosts from 'src/composables/usePosts';
import Post from 'src/components/ui/Post.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    Post,
  },
  setup() {
    const { getPosts, posts } = usePosts();

    onMounted(async () => {
      await getPosts();
    });

    return { posts };
  },
});
</script>
