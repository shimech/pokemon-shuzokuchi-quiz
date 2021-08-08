import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { RED } from '@/constants/color';

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
        css={css`
          text-align: center;
          color: ${RED};
          font-family: 'Kosugi Mono';
          font-size: 32px;
          font-weight: bold;
        `}
      >
        エラーが発生しました。
      </p>
      <p
        css={css`
          text-align: center;
          color: ${RED};
          font-family: 'Kosugi Mono';
          font-size: 32px;
          font-weight: bold;
        `}
      >
        {count}秒後にホームに戻ります。
      </p>
    </>
  );
};
