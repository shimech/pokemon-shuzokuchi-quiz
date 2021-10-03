import React from "react";
import type { QuizCondition } from "@/types/quizCondition";
import type { Region } from "@/types/region";

const initialValue: QuizCondition = {
  includeRegion: {
    kanto: true,
    johto: true,
    hoenn: true,
    sinnoh: true,
    unova: true,
    kalos: true,
    alola: true,
    galar: true,
  },
  includeMegaEvolution: false,
  includeSameStatus: false,
  includeBeforeEvolution: false,
};

export const QuizConditionContext = React.createContext<{
  value: QuizCondition;
  changeIncludeRegion: (region: Region) => void;
  changeIncludeMegaEvolution: VoidFunction;
  changeIncludeSameStatus: VoidFunction;
  changeIncludeBeforeEvolution: VoidFunction;
}>({
  value: initialValue,
  changeIncludeRegion: () => {},
  changeIncludeMegaEvolution: () => {},
  changeIncludeSameStatus: () => {},
  changeIncludeBeforeEvolution: () => {},
});

export const QuizConditionContextProvider: React.FC = (props) => {
  const [quizCondition, setQuizCondition] =
    React.useState<QuizCondition>(initialValue);

  const changeIncludeRegion = (region: Region) => {
    setQuizCondition((prevState) => {
      const prevIncludeRegion = prevState.includeRegion[region];
      return {
        ...prevState,
        includeRegion: {
          ...prevState.includeRegion,
          [region]: !prevIncludeRegion,
        },
      };
    });
  };

  const changeIncludeMegaEvolution = () => {
    setQuizCondition((prevState) => {
      return {
        ...prevState,
        includeMegaEvolution: !prevState.includeMegaEvolution,
      };
    });
  };

  const changeIncludeSameStatus = () => {
    setQuizCondition((prevState) => {
      return {
        ...prevState,
        includeSameStatus: !prevState.includeSameStatus,
      };
    });
  };

  const changeIncludeBeforeEvolution = () => {
    setQuizCondition((prevState) => {
      return {
        ...prevState,
        includeBeforeEvolution: !prevState.includeBeforeEvolution,
      };
    });
  };

  const value = {
    value: quizCondition,
    changeIncludeRegion,
    changeIncludeMegaEvolution,
    changeIncludeSameStatus,
    changeIncludeBeforeEvolution,
  };

  return (
    <QuizConditionContext.Provider value={value}>
      {props.children}
    </QuizConditionContext.Provider>
  );
};
