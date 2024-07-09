const StreamingBlock3 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <div>Streaming Block 3</div>;
};

export default StreamingBlock3;
