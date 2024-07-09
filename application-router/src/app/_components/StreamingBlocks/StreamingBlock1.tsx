const StreamingBlock1 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <div>Streaming Block 1</div>;
};

export default StreamingBlock1;
