import Link from 'next/link';
import { NextPage } from 'next';
import { IPost } from '@/_entities/post/model/IPost';
import { PostService } from '@/_entities/post/api/PostsService';

interface IProps {
  posts: IPost[];
}

const PostsPage: NextPage<IProps> = ({ posts }) => {
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

export default PostsPage;

export async function getStaticProps() {
  const posts = await PostService.fetchPosts();

  return { props: { posts } };
}
