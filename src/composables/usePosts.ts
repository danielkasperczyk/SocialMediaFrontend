import { ref, computed, Ref } from 'vue';
import PostsRepositry, {
  IPost,
  CreatePost,
} from 'src/services/repositories/Posts';

const usePosts = (post?: IPost) => {
  const loading = ref(false);
  const postRepository = new PostsRepositry();
  const posts: Ref<IPost[]> = ref([]);

  const getPosts = async () => {
    loading.value = true;
    const dbPosts = await postRepository.getPosts();
    posts.value = dbPosts;
    loading.value = false;
  };

  const createPost = async (_post: CreatePost) => {
    loading.value = true;
    await postRepository.createPost(_post);
    loading.value = false;
  };

  const getMainImage = computed(() => post?.images[0]);
  const getImages = computed(() => post?.images);
  const getPostDescription = computed(() => post?.description);
  const getUser = computed(() => post?.author.username);
  const getLikes = computed(() => post?.likes);

  return {
    loading,
    posts,
    getMainImage,
    getImages,
    getPostDescription,
    getUser,
    getLikes,
    getPosts,
    createPost,
  };
};

export default usePosts;
