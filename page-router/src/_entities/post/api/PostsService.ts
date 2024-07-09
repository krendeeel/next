import { IPost } from '@/_entities/post/model/IPost';

export const PostService = {
  fetchPosts: async (): Promise<IPost[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    return response.json();
  },
  fetchPost: async (id: string): Promise<IPost> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return response.json();
  },
};
