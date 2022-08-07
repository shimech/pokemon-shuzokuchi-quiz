import { css } from "@emotion/react";
import { HintButton, type HintButtonTexts } from "./HintButton";
import { useHintPanel } from "./useHintPanel";
import type { Hint } from "@/types/Hint";
import type { Pokemon } from "@/types/Pokemon";

const HINTS: Hint[] = ["type", "ability", "region"];

const children = (pokemon: Pokemon): { [key in Hint]: HintButtonTexts } => {
  const types = pokemon.type;
  const abilities = [...pokemon.ability.normal, pokemon.ability.special];

  return {
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
  };
};

type HintPanelProps = {
  className?: string;
  pokemon: Pokemon;
};

export const HintPanel = (props: HintPanelProps) => {
  const { isDesktop } = useHintPanel();

  return (
    <div
      className={props.className}
      css={(theme) => [
        css`
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 32px 16px 16px;
          border: 2px solid ${theme.colors.black};
          border-radius: 8px;
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
            position: absolute;
            top: -1.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
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
              padding: 0 8px;
              font-size: 2.4rem;
              background-color: ${theme.colors.white};
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
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        `}
      >
        {HINTS.map((hint, i) => (
          <li
            key={i}
            css={[
              css`
                width: 100%;
                margin: 0 8px;
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
