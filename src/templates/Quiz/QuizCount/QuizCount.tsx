import { css } from "@emotion/react";
import { useQuizCount } from "./useQuizCount";
import { ALL_QUIZ_COUNT } from "@/constants/allQuizCount";

type QuizCountProps = {
  className?: string;
};

export const QuizCount = (props: QuizCountProps) => {
  const { isDesktop, quizCount } = useQuizCount();

  return (
    <div
      className={props.className}
      css={(theme) => [
        css`
          padding: 12px 24px;
          font-family: "Otomanopee One", sans-serif;
          line-height: 1;
          color: ${theme.colors.white};
          background-color: ${theme.colors.black};
          border-radius: 8px;
          transition: box-shadow ${theme.duration}ms;

          &:hover {
            box-shadow: 4px 4px 4px ${theme.colors.blue};
          }
        `,
        !isDesktop &&
          css`
            padding: 8px 16px;
            font-size: 1.4rem;

            &:hover,
            &:active {
              box-shadow: 2px 2px 2px ${theme.colors.blue};
            }
          `,
      ]}
    >
      <strong
        css={[
          (theme) => css`
            margin-right: 4px;
            font-family: inherit;
            font-size: 2.4rem;
            line-height: inherit;
            color: ${theme.colors.white};
          `,
          !isDesktop &&
            css`
              font-size: 1.8rem;
            `,
        ]}
      >
        {Math.min(quizCount, ALL_QUIZ_COUNT)}
      </strong>
      /{ALL_QUIZ_COUNT}
    </div>
  );
};
