import { css } from "@emotion/react";
import {
  Backdrop,
  CircularProgress as CircularProgressBase,
} from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { useCircularProgress } from "./useCircularProgress";

type CircularProgressProps = {
  open: boolean;
};

export const CircularProgress: React.VoidFunctionComponent<
  CircularProgressProps
> = (props) => {
  const body = useCircularProgress();

  if (body) {
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
  } else {
    return null;
  }
};
