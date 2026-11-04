import { configureStore } from '@reduxjs/toolkit';
import filtrosReducer from './filtrosSlice';

export const store = configureStore({
  reducer: { filtros: filtrosReducer },
});