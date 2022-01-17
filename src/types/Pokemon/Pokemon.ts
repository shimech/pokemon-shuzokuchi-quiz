import type { Status } from "../Status";

export type Pokemon = {
  readonly id: string;
  readonly no: number;
  readonly name: string;
  readonly type: string[];
  readonly ability: {
    readonly normal: string[];
    readonly special: string;
  };
  readonly status: Status;
  readonly isFinal: boolean;
  readonly region: string;
  readonly isMegaEvolution: boolean;
  readonly isSameStatus: boolean;
};
