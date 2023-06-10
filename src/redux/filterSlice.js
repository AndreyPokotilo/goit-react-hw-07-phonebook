import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterSliceReducer = filterSlice.reducer;
