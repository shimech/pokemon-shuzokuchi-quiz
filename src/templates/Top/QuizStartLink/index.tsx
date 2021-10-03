import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/Button";
import { useDesktop } from "@/hooks/useDesktop";
import { usePokemons } from "@/hooks/usePokemons";

const baseUrl = "/quiz/";

export const QuizStartLink: React.VoidFunctionComponent = () => {
  const [url, setUrl] = React.useState("");
  const pokemons = usePokemons();
  const isDesktop = useDesktop();

  React.useEffect(() => {
    if (pokemons.length) {
      setUrl(baseUrl + pokemons[0].id);
    }
  }, [pokemons]);

  return (
    <Link passHref href={url}>
      <a
        css={[
          css`
            display: block;
            height: 4rem;
          `,
          !isDesktop &&
            css`
              height: 3.2rem;
            `,
        ]}
      >
        <Button
          css={(theme) => [
            css`
              background-color: ${theme.colors.black};
              border-radius: 2rem;
              height: 100%;
              transition: background-color ${theme.transition}ms;
              width: 100%;
              &:hover {
                background-color: ${theme.colors.blue};
              }
              & > span {
                color: ${theme.colors.white};
                font-family: Kosugi Maru, sans-serif;
                font-size: 2rem;
                font-weight: bold;
              }
            `,
            !isDesktop &&
              css`
                & > span {
                  font-size: 1.6rem;
                }
              `,
          ]}
        >
          クイズスタート
        </Button>
      </a>
    </Link>
  );
};
