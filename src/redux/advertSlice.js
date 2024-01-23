import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "./operation";

const advertSlice = createSlice({
    name: "advert",
    initialState: {
        advert: [],
        error: null,
        isLoading: false,
        page:1,
        limit:12,
    },
    reducers: {
        loadMore: (state, {payload}) => {
        state.page = payload.page;
        state.limit = payload.limit;
        },
    },
    extraReducers: builder => {
     builder
     .addCase(getAll.pending, (state, {payload}) => {
        state.isLoading = true;
        state.error = null;
     })
     .addCase(getAll.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload;
     })
     .addCase(getAll.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.error = null;

        state.advert = state.page === 1 ? payload.map( item => ({...item})) : [...state.advert, ...payload.slice(0, state.limit)];
     });
    },
});

export const {loadMore} = advertSlice.actions;
export const advertReducer = advertSlice.reducer;