import { NextPage } from 'next';

interface IProps {
  timeError: number;
}

const ErrorPage: NextPage<IProps> = ({ timeError }) => {
  return <div>Error time: {timeError}</div>;
};

export default ErrorPage;

export async function getServerSideProps() {
  const timeError = await new Promise((resolve) => {
    setTimeout(() => resolve(new Date().getTime()), 5000);
  });

  return {
    props: { timeError },
  };
}
