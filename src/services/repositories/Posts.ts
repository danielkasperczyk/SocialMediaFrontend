import Repository from 'src/services/repositories/Repository';

export interface IPost {
  images: string[];
  author: {
    _id: string;
    username: string | null;
  };
  description: string;
  likes: {
    likes: number;
    users: string[];
  };
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}

export type CreatePost = {
  images: File[];
  description: string;
};
class PostsRepositry extends Repository {
  resource = 'posts';

  public async getPosts() {
    try {
      const { data } = await this.api.get<IPost[]>(this.resource);
      return data;
    } catch (err: any) {
      this.errorHandler(err);
      return [];
    }
  }

  public async createPost(post: CreatePost) {
    try {
      const { data } = await this.api.post<IPost>(this.resource, post);
      return data;
    } catch (err: any) {
      this.errorHandler(err);
      return {};
    }
  }
}

export default PostsRepositry;
