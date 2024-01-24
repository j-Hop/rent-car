import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65aaecd3081bd82e1d98026b.mockapi.io';

const params = new URLSearchParams({
  page: 1,
  limit: 12,
});

export const getAll = createAsyncThunk(
  'cars/fatchAll',async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/cars?${params}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getMore = createAsyncThunk(
  'cars/loadMore',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/cars?page=${page}&limit=${limit}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getFiltered = createAsyncThunk(
  'cars/getFilter',
  async (filters, { rejectWithValue }) => {
    try {
      const completeFilters = {
        make: filters.make,
        rentalPrice: filters.price,
      };
      const { data } = await axios.get(`/cars`, {
        params: completeFilters,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);