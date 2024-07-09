import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const PostLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <h3>Post Layout</h3>
      {children}
    </>
  );
};

export default PostLayout;
