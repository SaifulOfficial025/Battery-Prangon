import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from './config';

// Async thunk to fetch sliders from API
export const fetchSliders = createAsyncThunk(
  'slider/fetchSliders',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/products/api/sliders`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    sliders: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSliders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSliders.fulfilled, (state, action) => {
        state.loading = false;
        // Optional: sort sliders by order_index if present
        const sorted = [...action.payload].sort((a, b) => (a.order_index ?? 0) - (b.order_index ?? 0));
        state.sliders = sorted;
      })
      .addCase(fetchSliders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default sliderSlice.reducer;
