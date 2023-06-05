import { createSlice } from '@reduxjs/toolkit'

const initialState = {
bookForm:{},
personalInfoForm:{}
}

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    SAVE_BOOK_FORM(state,action){
        state.bookForm = action.payload
    },
    SAVE_PERSONAL_INFO_FORM(state,action){
      state.personalInfoForm = action.payload
  }
  }
});

export const {SAVE_BOOK_FORM, SAVE_PERSONAL_INFO_FORM} = bookSlice.actions

export  const selectBookForm = (state) => state.book.bookForm
export  const selectPersonalInfoForm = (state) => state.book.personalInfoForm

export default bookSlice.reducer