import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpened: false,
  type: null,
  extra: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state) => ({
      ...state,
      isOpened: !state.isOpened,
    }),
  },
});

export default modalSlice.reducer;

export const actionsModal = modalSlice.actions;
