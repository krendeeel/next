import { FC } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PostService } from '@/_entities/post/api/PostsService';

interface IProps {
  params: { id: string };
}

const Post: FC<IProps> = async ({ params }) => {
  const post = await PostService.fetchPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

// SSG по id поста
export const generateStaticParams = async () => {
  const posts = await PostService.fetchPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
};

export const generateMetadata = async ({ params: { id } }: IProps): Promise<Metadata> => {
  const post = await PostService.fetchPost(id);

  return {
    title: post.title,
  };
};

export const dynamicParams = false;
