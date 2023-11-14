export const Test = async () => {
  const product = await fetch(`https://dummyjson.com/products/1`, {
    cache: "no-store",
  });
  return <p>{JSON.stringify(product)}</p>;
};
