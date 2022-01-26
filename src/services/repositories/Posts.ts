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

class PostsRepositry extends Repository {
  public async getPosts() {
    try {
      const { data } = await this.api.get<IPost[]>('posts');
      return data;
    } catch (err: any) {
      this.errorHandler(err);
    }
    return [];
  }
}

export default PostsRepositry;
