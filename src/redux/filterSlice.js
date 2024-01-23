import { createSlice } from '@reduxjs/toolkit';
import { getFiltered } from './operation';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filters: {
      make: '',
      price: '',
    },
    filteredAdvert: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = payload;
    },
    resetFilters: state => {
      return {
        filters: {
          make: '',
          price: '',
        },
        filteredAdvert: [],
        isLoading: false,
        isError: false,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getFiltered.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getFiltered.rejected, state => {
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(getFiltered.fulfilled, (state, { payload }) => {
        state.filteredAdvert = payload;
        state.isLoading = false;
      });
  },
});

export const { setFilters, resetFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;