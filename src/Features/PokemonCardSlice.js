import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; // createAsyncThunk : Simplifie la gestion des actions asynchrones comme les appels API.
import axios from "axios";

// Thunk pour récupérer les cartes Pokémon
export const fetchPokemonCards = createAsyncThunk(
  "pokemon/fetchPokemonCards",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://api.tcgdex.net/v2/fr/cards?id=like:hgss2&image=notnull:"
      );
      return response.data; // Les données des cartes Pokémon
    } catch (error) {
      return rejectWithValue(error.response?.data || "Erreur de récupération");
    }
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    cards: [], // Liste des cartes Pokémon
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonCards.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPokemonCards.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cards = action.payload;
      })
      .addCase(fetchPokemonCards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default pokemonSlice.reducer;
