import { createSlice } from '@reduxjs/toolkit'

const initialState = {
modalItem: localStorage.getItem('modalItem')
? JSON.parse(localStorage.getItem('modalItem'))
: [],
showModal: false
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    ADD_ITEM_TO_MODAL(state, action) {
        state.modalItem = action.payload
        console.log(action.payload)
    },
    SHOW_MODAL(state,action){
      state.showModal = action.payload.showModal
    }
  }
});

export const {ADD_ITEM_TO_MODAL,SHOW_MODAL} = modalSlice.actions

export const selectModalItem = (state) => state.modal.modalItem
export const selectShowModal = (state) => state.modal.showModal

export default modalSlice.reducer