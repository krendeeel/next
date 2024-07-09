const StreamingBlock2 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return <div>Streaming Block 2</div>;
};

export default StreamingBlock2;
