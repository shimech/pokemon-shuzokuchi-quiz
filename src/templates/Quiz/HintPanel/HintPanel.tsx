import { css } from "@emotion/react";
import React from "react";
import { HintButton, HintButtonTexts } from "./HintButton";
import { useHintPanel } from "./useHintPanel";
import type { Hint } from "@/types/Hint";
import type { Pokemon } from "@/types/Pokemon";

const HINTS: Hint[] = ["type", "ability", "region"];

const children = (pokemon: Pokemon): { [key in Hint]: HintButtonTexts } => {
  const types = pokemon.type;
  const abilities = [...pokemon.ability.normal, pokemon.ability.special];

  return {
    type: {
      category: <p>タイプ</p>,
      content: (
        <>
          {types.map((type, i) => (
            <p key={i}>{type || "-"}</p>
          ))}
        </>
      ),
    },
    ability: {
      category: <p>とくせい</p>,
      content: (
        <>
          {abilities.map((ability, i) => (
            <p key={i}>{ability || "-"}</p>
          ))}
        </>
      ),
    },
    region: {
      category: <p>地方</p>,
      content: <p>{pokemon.region}</p>,
    },
  };
};

type HintPanelProps = {
  className?: string;
  pokemon: Pokemon;
};

export const HintPanel: React.VoidFunctionComponent<HintPanelProps> = (
  props,
) => {
  const { isDesktop } = useHintPanel();

  return (
    <div
      className={props.className}
      css={(theme) => [
        css`
          align-items: center;
          border: 2px solid ${theme.colors.black};
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          padding: 32px 16px 16px;
          position: relative;
        `,
        !isDesktop &&
          css`
            padding: 24px 8px 8px;
          `,
      ]}
    >
      <div
        css={[
          css`
            align-items: center;
            display: flex;
            justify-content: center;
            position: absolute;
            top: -1.2rem;
          `,
          !isDesktop &&
            css`
              top: -0.6rem;
            `,
        ]}
      >
        <p
          css={(theme) => [
            css`
              background-color: ${theme.colors.white};
              font-size: 2.4rem;
              padding: 0 8px;
            `,
            !isDesktop &&
              css`
                font-size: 1.4rem;
              `,
          ]}
        >
          ヒント
        </p>
      </div>
      <ul
        css={css`
          align-items: center;
          display: flex;
          justify-content: center;
          width: 100%;
        `}
      >
        {HINTS.map((hint, i) => (
          <li
            key={i}
            css={[
              css`
                margin: 0 8px;
                width: 100%;
              `,
              !isDesktop &&
                css`
                  margin: 0 4px;
                `,
            ]}
          >
            <HintButton hint={hint} texts={children(props.pokemon)[hint]} />
          </li>
        ))}
      </ul>
    </div>
  );
};
