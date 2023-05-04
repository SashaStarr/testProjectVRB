// Redux Imports
import { createSlice } from '@reduxjs/toolkit'


export const modalVisible = createSlice({
  name: 'modalVisible',
  initialState: {
    active: false
  },
  reducers: {
    openModal: (state) => {
        state.active = !state.active
      },
  },
})

export const { openModal } = modalVisible.actions;

export default modalVisible.reducer;