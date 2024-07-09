'use client';

export const ErrorButton = () => {
  const handleClick = () => {
    throw new Error('Error from button');
  };

  return <button onClick={handleClick}>error</button>;
};
