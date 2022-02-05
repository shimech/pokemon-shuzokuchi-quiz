export type Pokemon = {
  readonly id: string;
  readonly no: number;
  readonly name: string;
  readonly type: string[];
  readonly ability: {
    readonly normal: string[];
    readonly special: string;
  };
  readonly status: {
    readonly hitpoint: number;
    readonly attack: number;
    readonly block: number;
    readonly contact: number;
    readonly defense: number;
    readonly speed: number;
    readonly total: number;
  };
  readonly isFinal: boolean;
  readonly region: string;
  readonly isMegaEvolution: boolean;
  readonly isSameStatus: boolean;
};
