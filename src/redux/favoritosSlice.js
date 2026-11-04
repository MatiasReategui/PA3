import { createSlice } from '@reduxjs/toolkit';

// El estado de este slice es directamente un arreglo de ids.
// Por eso en el store la llave se llama idsFavoritos.
const favoritosSlice = createSlice({
  name: 'idsFavoritos',
  initialState: [],
  reducers: {
    alternarFavorito: (state, action) => {
      const id = action.payload;
      const indice = state.indexOf(id);
      if (indice === -1) {
        state.push(id);
      } else {
        state.splice(indice, 1);
      }
    },
  },
});

export const { alternarFavorito } = favoritosSlice.actions;
export default favoritosSlice.reducer;
