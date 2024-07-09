'use client'; // Error components must be Client Components
import { DispatchWithoutAction, FC } from 'react';

interface IProps {
  error: Error;
  reset: DispatchWithoutAction;
}

const Error: FC<IProps> = ({ error, reset }) => {
  return (
    <div>
      <h1>Локальная ошибка</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default Error;
