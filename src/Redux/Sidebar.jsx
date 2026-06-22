import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from './config';

// Async thunks to fetch data from APIs
export const fetchCategories = createAsyncThunk(
  'sidebar/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/products/api/categories`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchVoltages = createAsyncThunk(
  'sidebar/fetchVoltages',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/products/api/voltages`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCapacities = createAsyncThunk(
  'sidebar/fetchCapacities',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/products/api/capacity`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    categories: [],
    voltages: [],
    capacities: [],
    loading: {
      categories: false,
      voltages: false,
      capacities: false,
    },
    error: {
      categories: null,
      voltages: null,
      capacities: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Categories
      .addCase(fetchCategories.pending, (state) => {
        state.loading.categories = true;
        state.error.categories = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading.categories = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading.categories = false;
        state.error.categories = action.payload;
      })
      // Voltages
      .addCase(fetchVoltages.pending, (state) => {
        state.loading.voltages = true;
        state.error.voltages = null;
      })
      .addCase(fetchVoltages.fulfilled, (state, action) => {
        state.loading.voltages = false;
        state.voltages = action.payload;
      })
      .addCase(fetchVoltages.rejected, (state, action) => {
        state.loading.voltages = false;
        state.error.voltages = action.payload;
      })
      // Capacities
      .addCase(fetchCapacities.pending, (state) => {
        state.loading.capacities = true;
        state.error.capacities = null;
      })
      .addCase(fetchCapacities.fulfilled, (state, action) => {
        state.loading.capacities = false;
        state.capacities = action.payload;
      })
      .addCase(fetchCapacities.rejected, (state, action) => {
        state.loading.capacities = false;
        state.error.capacities = action.payload;
      });
  },
});

export default sidebarSlice.reducer;
