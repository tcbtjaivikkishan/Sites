import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SuccessStory {
  id: string;
  title: string;
  description: string;
  farmer: string;
  image: string;
}

interface ModalState {
  isOpen: boolean;
  selectedStory: SuccessStory | null;
}

const initialState: ModalState = {
  isOpen: false,
  selectedStory: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<SuccessStory>) => {
      state.isOpen = true;
      state.selectedStory = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.selectedStory = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;