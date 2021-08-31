import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const MAX_COUNT = 3;
const INTERVAL = 1000;

export const ErrorComponent: React.VFC = () => {
  const [count, setCount] = useState(MAX_COUNT);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, INTERVAL);

    setTimeout(() => {
      router.push('/');
    }, MAX_COUNT * INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p
        css={(theme) => css`
          color: ${theme.colors.red};
          font-family: 'Kosugi Mono';
          font-size: 32px;
          font-weight: bold;
          text-align: center;
        `}
      >
        エラーが発生しました。
      </p>
      <p
        css={(theme) => css`
          color: ${theme.colors.red};
          font-family: 'Kosugi Mono';
          font-size: 32px;
          font-weight: bold;
          text-align: center;
        `}
      >
        {count}秒後にホームに戻ります。
      </p>
    </>
  );
};
