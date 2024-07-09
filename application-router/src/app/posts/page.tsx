import Link from 'next/link';
import { PostService } from '@/_entities/post/api/PostsService';

export const revalidate = 10;

const Posts = async () => {
  const posts = await PostService.fetchPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
