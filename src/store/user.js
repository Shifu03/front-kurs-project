import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    id: undefined,
    email: '',
    name: '',
    surname: '',
    location: '',
    role: 'user',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return { ...state, ...action.payload };
        },
        updateUserField: (state, action) => {
            const { field, value } = action.payload;
            (state[field]) = value;
        },
        getUser : (state, action) => {
            
        }

    },
});

export const { setUser, updateUserField, getUser } = userSlice.actions;
export default userSlice.reducer;
export const selectUser = (state) => state.user;
