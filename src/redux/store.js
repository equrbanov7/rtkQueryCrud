import {
    configureStore
} from "@reduxjs/toolkit";
import {
    inventoryAPI
} from "./categoriesApi";
import {
    setupListeners
} from "@reduxjs/toolkit/query";
import {
    categoryReducer
} from "./categoryReducer";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
    key: "root",
    storage,

};

const persistedCategoryReducer = persistReducer(persistConfig, categoryReducer);

export const store = configureStore({
    reducer: {
        category: persistedCategoryReducer,
        [inventoryAPI.reducerPath]: inventoryAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(inventoryAPI.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);