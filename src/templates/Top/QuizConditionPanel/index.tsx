import { css } from "@emotion/react";
import React from "react";
import { RegionConditionButton } from "./RegionConditionButton";
import { REGION } from "@/constants/region";
import { QuizConditionContext } from "@/contexts/QuizConditionContextProvider";
import type { Region } from "@/types/region";

export const QuizConditionPanel: React.FC = () => {
  const quizCondition = React.useContext(QuizConditionContext);

  return (
    <div
      css={css`
        align-items: center;
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={(theme) => css`
          align-items: center;
          background-color: ${theme.colors.gray};
          display: flex;
          height: 4.8rem;
          justify-content: center;
          margin-bottom: 12px;
          width: 240px;
        `}
      >
        <h2
          css={css`
            font-family: Kosugi Maru;
            font-size: 3.2rem;
          `}
        >
          出題範囲
        </h2>
      </div>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 95vw;
          width: calc(120px * 8 + 10px * 7);
        `}
      >
        {Object.keys(REGION).map((region: Region, i) => (
          <RegionConditionButton
            key={i}
            include={quizCondition.value.includeRegion[region]}
            onClick={() => quizCondition.changeIncludeRegion(region)}
          >
            {REGION[region]}
          </RegionConditionButton>
        ))}
      </div>
    </div>
  );
};
