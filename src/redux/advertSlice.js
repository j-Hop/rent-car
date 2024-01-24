import { createSlice } from '@reduxjs/toolkit';
import { getAll, getMore } from './operation';

const advertSlice = createSlice({
  name: 'advert',
  initialState: {
    advert: [],
    error: null,
    isLoading: false,
    isLoadMore: true,
  },
  extraReducers: builder => {
    builder
      .addCase(getAll.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.advert = payload;
      })
      .addCase(getAll.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAll.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getMore.fulfilled, (state, { payload }) => {
        state.advert = [...state.advert, ...payload];
        state.isLoadMore = payload.length > 0;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMore.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMore.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const advertReducer = advertSlice.reducer;