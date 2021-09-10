import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon, PokemonDriver, PokemonRepository } from '@/domains/pokemon';
import { PokemonDriverImpl } from '@/drivers/pokemon';
import { PokemonRepositoryImpl } from '@/repositories/pokemon';

type Result = {
  pokemon?: Pokemon;
  isCorrect?: boolean;
  numHintOpen: number;
};

type PokemonIds = string[];

type UpdatePayload = {
  numQuestion: number;
  isCorrect: boolean;
  numHintOpen: number;
};

const initialState: Result[] = [];

// TODO: DI Container
const pokemonDriver: PokemonDriver = new PokemonDriverImpl();
const pokemonRepository: PokemonRepository = new PokemonRepositoryImpl(
  pokemonDriver,
);

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    init: (state, action: PayloadAction<PokemonIds>) => {
      state = action.payload.map((id) => ({
        pokemon: pokemonRepository.findById(id),
        isCorrect: null,
        numHintOpen: 0,
      }));
    },
    update: (state, action: PayloadAction<UpdatePayload>) => {
      const prevResult = state[action.payload.numQuestion];
      state[action.payload.numQuestion] = {
        ...prevResult,
        isCorrect: action.payload.isCorrect,
        numHintOpen: action.payload.numHintOpen,
      };
    },
    reset: () => initialState,
  },
});

export const { init, reset } = resultSlice.actions;
export default resultSlice.reducer;
