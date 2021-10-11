import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";
import { Button } from "../Button";
import { PokemonsContext } from "@/contexts/PokemonsContextProvider";
import { ResultContext } from "@/contexts/ResultContextProvider";

type NextPageLinkProps = {
  className?: string;
  onClick?: VoidFunction;
};

export const NextPageLink: React.FunctionComponent<NextPageLinkProps> = (
  props,
) => {
  const [url, setUrl] = React.useState("");
  const pokemons = React.useContext(PokemonsContext);
  const result = React.useContext(ResultContext);

  React.useEffect(() => {
    if (result.value.numQuiz < 10) {
      if (pokemons.value.length) {
        setUrl(`/quiz/${pokemons.value[result.value.numQuiz].id}`);
      }
    } else {
      setUrl("/result");
    }
  }, [pokemons, result]);

  return (
    <Link passHref href={url}>
      <a
        className={props.className}
        css={[
          css`
            display: block;
          `,
          url === "" &&
            css`
              pointer-events: none;
            `,
        ]}
        onClick={() => {
          result.increment("numQuiz");
          if (props.onClick) {
            props.onClick();
          }
        }}
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
