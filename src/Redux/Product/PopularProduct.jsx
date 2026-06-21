import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../config';

// Async thunk to fetch popular products from API
export const fetchPopularProducts = createAsyncThunk(
  'popularProduct/fetchPopularProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/products/api/products/?is_popular=true`);
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

const popularProductSlice = createSlice({
  name: 'popularProduct',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload?.results || [];
      })
      .addCase(fetchPopularProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default popularProductSlice.reducer;
