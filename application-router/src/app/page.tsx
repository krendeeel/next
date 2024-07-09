import Image from 'next/image';
import { Suspense } from 'react';
import StreamingBlock1 from '@/app/_components/StreamingBlocks/StreamingBlock1';
import StreamingBlock2 from '@/app/_components/StreamingBlocks/StreamingBlock2';
import StreamingBlock3 from '@/app/_components/StreamingBlocks/StreamingBlock3';
import StreamingLoading from '@/app/_components/StreamingBlocks/StreamingLoading';

export default function Home() {
  return (
    <main>
      <h2>Home page</h2>
      <Suspense fallback={<StreamingLoading />}>
        <StreamingBlock1 />
      </Suspense>
      <Suspense fallback={<StreamingLoading />}>
        <StreamingBlock2 />
      </Suspense>
      <Suspense fallback={<StreamingLoading />}>
        <StreamingBlock3 />
      </Suspense>
      <Image src={'/cat.png'} width={400} sizes={'100vh'} height={200} alt={'cat'} />
    </main>
  );
}
