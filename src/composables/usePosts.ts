import { ref, computed, Ref } from 'vue';
import PostsRepositry, { IPost } from 'src/services/repositories/Posts';

const usePosts = (post?: IPost) => {
  const postRepository = new PostsRepositry();
  const posts: Ref<IPost[]> = ref([]);

  const getPosts = async () => {
    const dbPosts = await postRepository.getPosts();
    posts.value = dbPosts;
  };

  const getMainImage = computed(() => post?.images[0]);
  const getImages = computed(() => post?.images);
  const getPostDescription = computed(() => post?.description);
  const getUser = computed(() => post?.author.username);
  const getLikes = computed(() => post?.likes);

  return {
    posts,
    getMainImage,
    getImages,
    getPostDescription,
    getUser,
    getLikes,
    getPosts,
  };
};

export default usePosts;
