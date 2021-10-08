import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";
import { Button } from "../Button";
import { usePokemons } from "@/hooks/usePokemons";

type NextPageLinkProps = {
  className?: string;
};

export const NextPageLink: React.FunctionComponent<NextPageLinkProps> = (
  props,
) => {
  const [url, setUrl] = React.useState("");
  const pokemons = usePokemons();

  React.useEffect(() => {
    if (pokemons.length) {
      setUrl(`/quiz/${pokemons[0].id}`);
    }
  }, [pokemons]);

  return (
    <Link passHref href={url}>
      <a
        className={props.className}
        css={css`
          display: block;
        `}
      >
        <Button
          css={(theme) =>
            css`
              background-color: ${theme.colors.black};
              height: 100%;
              transition: background-color ${theme.transition}ms;
              width: 100%;
              &:hover {
                background-color: ${theme.colors.blue};
              }
              & > span {
                color: ${theme.colors.white};
                font-family: Kosugi Maru, sans-serif;
                font-weight: bold;
              }
            `
          }
        >
          {props.children}
        </Button>
      </a>
    </Link>
  );
};
