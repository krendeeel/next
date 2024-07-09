import { NextPage } from 'next';
import { IPost } from '@/_entities/post/model/IPost';
import { PostService } from '@/_entities/post/api/PostsService';

interface IServerProps {
  post: IPost;
}

interface IClientProps extends IServerProps {
  params: { id: string };
}

const Post: NextPage<IServerProps & IClientProps> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  const posts = await PostService.fetchPosts();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: IClientProps) {
  const post = await PostService.fetchPost(params.id);

  return {
    props: { post },
    // revalidate: 10
  };
}
