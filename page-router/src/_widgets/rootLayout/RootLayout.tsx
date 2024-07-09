import { FC, ReactNode } from 'react';
import Link from 'next/link';

interface IProps {
  children: ReactNode;
}

export const RootLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <header style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href={'/'}>home</Link>
        <Link href={'/posts'}>posts</Link>
      </header>
      <main>{children}</main>
    </>
  );
};
