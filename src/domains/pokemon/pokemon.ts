export type Pokemon = {
  id: string;
  no: number;
  name: string;
  type: string[];
  ability: {
    normal: string[];
    special: string;
  };
  status: {
    hitpoint: number;
    attack: number;
    block: number;
    contact: number;
    defense: number;
    speed: number;
    total: number;
  };
  isFinal: boolean;
  region: string;
  isMegaEvolution: boolean;
  isSameStatus: boolean;
};
