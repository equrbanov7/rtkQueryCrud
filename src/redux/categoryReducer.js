import {
    createSlice
} from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    favorites: [],
    basket: [],
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addAndDeleteFromFavorite: (state, action) => {
            const index = state.favorites.findIndex(item => item.id === action.payload.id);
            if (index === -1) {
                state.favorites.push(action.payload);
            } else {
                state.favorites.splice(index, 1);
            }
        },
        addBasket: (state, action) => {
            state.basket.push(action.payload)
        }


    },
});

export const {
    addAndDeleteFromFavorite,
    addBasket,
} = categorySlice.actions;

export const categoryReducer = categorySlice.reducer;