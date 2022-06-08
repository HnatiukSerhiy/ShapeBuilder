import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    shape: {}
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addShape: (state, action) => {
            state.shape = action.payload.shape;
        },
        resetState: () => initialState
    }
});

export const {addShape, resetState} = appSlice.actions;

export default appSlice.reducer;