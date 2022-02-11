import { css } from "@emotion/react";
import React from "react";
import { ConditionButton } from "./ConditionButton";
import { useQuizConditionPanel } from "./useQuizConditionPanel";
import { REGION } from "@/constants/region";
import type { Region } from "@/types/Region";

type QuizConditionPanelProps = {
  className?: string;
};

export const QuizConditionPanel: React.VoidFunctionComponent<
  QuizConditionPanelProps
> = (props) => {
  const {
    isDesktop,
    quizCondition,
    handleRegionClick,
    handleMegaEvolutionClick,
    handleSameStatusClick,
    handleBeforeEvolutionClick,
  } = useQuizConditionPanel();

  return (
    <div
      className={props.className}
      css={css`
        align-items: center;
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={(theme) => [
          css`
            align-items: center;
            border-left: 4px solid ${theme.colors.black};
            border-right: 4px solid ${theme.colors.black};
            display: flex;
            height: 4.8rem;
            justify-content: center;
            margin-bottom: 16px;
            width: 21.6rem;
          `,
          !isDesktop &&
            css`
              border-left: 2px solid ${theme.colors.black};
              border-right: 2px solid ${theme.colors.black};
              height: 3.6rem;
              width: 13.6rem;
            `,
        ]}
      >
        <h2
          css={[
            css`
              font-size: 3.2rem;
            `,
            !isDesktop &&
              css`
                font-size: 2.4rem;
              `,
          ]}
        >
          出題範囲
        </h2>
      </div>
      <div
        css={[
          css`
            display: grid;
            grid-gap: 8px;
            grid-template-columns: 120px 120px 120px 120px;
            margin-bottom: 8px;
          `,
          !isDesktop &&
            css`
              grid-template-columns: 96px 96px 96px;
            `,
        ]}
      >
        {Object.keys(REGION).map((region: Region, i) => (
          <ConditionButton
            key={i}
            include={quizCondition.includeRegion[region]}
            onClick={handleRegionClick(region)}
          >
            {REGION[region]}
          </ConditionButton>
        ))}
      </div>
      <div
        css={css`
          margin-bottom: 8px;
          width: 100%;
        `}
      >
        <ConditionButton
          include={quizCondition.includeMegaEvolution}
          onClick={handleMegaEvolutionClick}
        >
          メガシンカ・ゲンシカイキを含む
        </ConditionButton>
      </div>
      <div
        css={css`
          margin-bottom: 8px;
          width: 100%;
        `}
      >
        <ConditionButton
          include={quizCondition.includeSameStatus}
          onClick={handleSameStatusClick}
        >
          同一種族値のポケモンを含む
        </ConditionButton>
      </div>
      <div
        css={css`
          margin-bottom: 8px;
          width: 100%;
        `}
      >
        <ConditionButton
          include={quizCondition.includeBeforeEvolution}
          onClick={handleBeforeEvolutionClick}
        >
          進化前のポケモンを含む
        </ConditionButton>
      </div>
    </div>
  );
};
