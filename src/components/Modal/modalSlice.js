import { createSlice } from '@reduxjs/toolkit';
import { addChannelAction } from '../Channels/channelsSlice';

const initialState = {
  isOpened: false,
  type: null,
  extra: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload: { type } }) => ({
      ...state,
      type,
      isOpened: true,
    }),
    closeModal: (state) => ({
      ...state,
      isOpened: false,
    }),
  },
  extraReducers: {
    [addChannelAction.fulfilled]: (state) => ({
      ...state,
      isOpened: false,
    }),
  },
});

export default modalSlice.reducer;

export const actionsModal = modalSlice.actions;
