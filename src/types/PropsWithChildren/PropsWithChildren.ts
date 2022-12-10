import type React from "react";
import type { EmptyObject } from "../EmptyObject";

export type PropsWithChildren<T = EmptyObject> = T & {
  children?: React.ReactNode;
};
