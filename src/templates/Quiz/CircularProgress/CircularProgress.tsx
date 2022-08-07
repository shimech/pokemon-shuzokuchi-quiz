import { css } from "@emotion/react";
import {
  Backdrop,
  CircularProgress as CircularProgressBase,
} from "@mui/material";
import ReactDOM from "react-dom";
import { useCircularProgress } from "./useCircularProgress";

export const CircularProgress = () => {
  const { isLoading, body } = useCircularProgress();

  if (!body) {
    return null;
  }

  return ReactDOM.createPortal(
    <Backdrop
      css={css`
        z-index: 0;
      `}
      open={isLoading}
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
