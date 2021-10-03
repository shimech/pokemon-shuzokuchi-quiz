import { css } from "@emotion/react";
import React from "react";
import { OtherConditionButton } from "./OtherConditionButton";
import { RegionConditionButton } from "./RegionConditionButton";
import { REGION } from "@/constants/region";
import { QuizConditionContext } from "@/contexts/QuizConditionContextProvider";
import { useDesktop } from "@/hooks/useDesktop";
import type { Region } from "@/types/region";

export const QuizConditionPanel: React.VoidFunctionComponent = () => {
  const isDesktop = useDesktop();
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
            include={quizCondition.value.includeRegion[region]}
            onClick={() => quizCondition.changeIncludeRegion(region)}
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
          include={quizCondition.value.includeMegaEvolution}
          onClick={quizCondition.changeIncludeMegaEvolution}
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
          include={quizCondition.value.includeSameStatus}
          onClick={quizCondition.changeIncludeSameStatus}
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
          include={quizCondition.value.includeBeforeEvolution}
          onClick={quizCondition.changeIncludeBeforeEvolution}
        >
          進化前のポケモンを含む
        </OtherConditionButton>
      </div>
    </div>
  );
};
