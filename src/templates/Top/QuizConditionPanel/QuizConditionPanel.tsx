import { css } from "@emotion/react";
import React from "react";
import { OtherConditionButton } from "./OtherConditionButton";
import { RegionConditionButton } from "./RegionConditionButton";
import { useQuizConditionPanel } from "./useQuizConditionPanel";
import { REGION } from "@/constants/region";
import type { Region } from "@/types/Region";

export const QuizConditionPanel: React.VoidFunctionComponent = () => {
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
            margin-bottom: 20px;
            width: 220px;
          `,
          !isDesktop &&
            css`
              border-left: 2px solid ${theme.colors.black};
              border-right: 2px solid ${theme.colors.black};
              height: 2.4rem;
              width: 96px;
            `,
        ]}
      >
        <h2
          css={[
            css`
              font-family: Kosugi Maru, sans-serif;
              font-size: 3.2rem;
            `,
            !isDesktop &&
              css`
                font-size: 1.6rem;
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
              grid-template-columns: 80px 80px 80px 80px;
            `,
        ]}
      >
        {Object.keys(REGION).map((region: Region, i) => (
          <RegionConditionButton
            key={i}
            include={quizCondition.includeRegion[region]}
            onClick={handleRegionClick(region)}
          >
            {REGION[region]}
          </RegionConditionButton>
        ))}
      </div>
      <div
        css={css`
          margin-bottom: 8px;
          width: 100%;
        `}
      >
        <OtherConditionButton
          include={quizCondition.includeMegaEvolution}
          onClick={handleMegaEvolutionClick}
        >
          メガシンカ・ゲンシカイキを含む
        </OtherConditionButton>
      </div>
      <div
        css={css`
          margin-bottom: 8px;
          width: 100%;
        `}
      >
        <OtherConditionButton
          include={quizCondition.includeSameStatus}
          onClick={handleSameStatusClick}
        >
          同一種族値のポケモンを含む
        </OtherConditionButton>
      </div>
      <div
        css={css`
          margin-bottom: 8px;
          width: 100%;
        `}
      >
        <OtherConditionButton
          include={quizCondition.includeBeforeEvolution}
          onClick={handleBeforeEvolutionClick}
        >
          進化前のポケモンを含む
        </OtherConditionButton>
      </div>
    </div>
  );
};
