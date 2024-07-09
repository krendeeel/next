import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const ResourcesLayout: FC<IProps> = ({ children }) => {
  return (
    <div>
      <h3>Resources Layout</h3>
      <div>{children}</div>
    </div>
  );
};

export default ResourcesLayout;
