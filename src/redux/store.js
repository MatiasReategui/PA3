import { configureStore } from '@reduxjs/toolkit';
import idsFavoritosReducer from './favoritosSlice';

export const store = configureStore({
  reducer: { idsFavoritos: idsFavoritosReducer },
});
