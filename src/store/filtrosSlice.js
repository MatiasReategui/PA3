import { createSlice } from '@reduxjs/toolkit';

const filtrosSlice = createSlice({
  name: 'filtros',
  initialState: { estado: 'todos', busqueda: '' },
  reducers: {
    setEstado: (state, action) => {
      state.estado = action.payload;
    },
    setBusqueda: (state, action) => {
      state.busqueda = action.payload;
    },
    limpiarFiltros: () => ({ estado: 'todos', busqueda: '' }),
  },
});

export const { setEstado, setBusqueda, limpiarFiltros } = filtrosSlice.actions;
export default filtrosSlice.reducer;