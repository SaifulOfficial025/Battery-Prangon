import { createSlice } from '@reduxjs/toolkit';

const langSlice = createSlice({
  name: 'lang',
  initialState: {
    lang: 'en', // 'en' or 'bn'
  },
  reducers: {
    toggleLang: (state) => {
      state.lang = state.lang === 'en' ? 'bn' : 'en';
    },
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { toggleLang, setLang } = langSlice.actions;
export default langSlice.reducer;
