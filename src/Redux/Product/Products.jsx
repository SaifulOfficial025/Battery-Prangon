import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../config';

// Async thunk to fetch products with optional filters + pagination + search
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ page = 1, pageSize = 9, category = null, voltage = null, capacity = null, search = null } = {}, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams();
      params.append('page', page);
      params.append('page_size', pageSize);
      if (category && category !== 'all') params.append('category', category);
      if (voltage && voltage !== 'all') params.append('voltage', voltage);
      if (capacity && capacity !== 'all') params.append('capacity', capacity);
      if (search && search.trim()) params.append('search', search.trim());

      const response = await fetch(`${BASE_URL}/products/api/products/?${params.toString()}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data; // { count, next, previous, results }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    count: 0,
    loading: false,
    error: null,
    // Current filter/pagination state stored in redux so other components can read it
    currentPage: 1,
    pageSize: 9,
    filters: {
      category: null,
      voltage: null,
      capacity: null,
      search: null,
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.currentPage = 1; // Reset to page 1 whenever filters change
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload?.results || [];
        state.count = action.payload?.count || 0;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters, setPage } = productsSlice.actions;
export default productsSlice.reducer;
