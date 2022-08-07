import { css } from "@emotion/react";
import { ConditionButton } from "./ConditionButton";
import { useQuizConditionPanel } from "./useQuizConditionPanel";
import { REGION } from "@/constants/region";
import type { Region } from "@/types/Region";

type QuizConditionPanelProps = {
  className?: string;
};

export const QuizConditionPanel = (props: QuizConditionPanelProps) => {
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
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <div
        css={(theme) => [
          css`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 21.6rem;
            height: 4.8rem;
            margin-bottom: 16px;
            border-right: 4px solid ${theme.colors.black};
            border-left: 4px solid ${theme.colors.black};
          `,
          !isDesktop &&
            css`
              width: 13.6rem;
              height: 3.6rem;
              border-right: 2px solid ${theme.colors.black};
              border-left: 2px solid ${theme.colors.black};
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
            grid-template-columns: 120px 120px 120px 120px;
            grid-gap: 8px;
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
          width: 100%;
          margin-bottom: 8px;
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
          width: 100%;
          margin-bottom: 8px;
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
          width: 100%;
          margin-bottom: 8px;
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
