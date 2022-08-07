import { css } from "@emotion/react";
import {
  Backdrop,
  CircularProgress as CircularProgressBase,
} from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { useCircularProgress } from "./useCircularProgress";

type CircularProgressProps = {
  open: boolean;
};

export const CircularProgress = (props: CircularProgressProps) => {
  const { body } = useCircularProgress();

  if (!body) {
    return null;
  }

  return ReactDOM.createPortal(
    <Backdrop
      css={css`
        z-index: 0;
      `}
      open={props.open}
    >
      <CircularProgressBase
        css={css`
          * {
            color: #fff;
          }
        `}
      />
    </Backdrop>,
    body,
  );
};
