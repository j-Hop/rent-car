import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "./favoriteSlice";
import { filterReducer } from "./filterSlice";
import { advertReducer } from "./advertSlice";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REGISTER,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
} from "redux-persist"

const persistConfig = {
    key : "root",
    storage,
};

export const store = configureStore({
    reducer: {
        advert: advertReducer,
        filter: filterReducer,
        favorite: persistReducer(persistConfig, favoriteReducer),
    },
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
        serializableCheck:{
            ignoreActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PAUSE, PURGE]
        },
    }),
});

export const persistor = persistStore(store);