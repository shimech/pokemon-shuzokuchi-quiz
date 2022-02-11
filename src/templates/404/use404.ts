import { useRouter } from "next/router";
import React from "react";

const MAX_COUNT = 3;

export const use404 = () => {
  const [count, setCount] = React.useState(MAX_COUNT);
  const router = useRouter();

  React.useEffect(() => {
    const timer = setInterval(
      () => setCount((prevCount) => prevCount - 1),
      1000,
    );
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    if (count <= 0) {
      router.push("/");
    }
  }, [count]);

  return count;
};
