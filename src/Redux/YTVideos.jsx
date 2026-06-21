import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from './config';

// Async thunk to fetch YouTube videos from API
export const fetchYTVideos = createAsyncThunk(
  'ytVideos/fetchYTVideos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/products/api/videos`);
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

const ytVideosSlice = createSlice({
  name: 'ytVideos',
  initialState: {
    videos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchYTVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchYTVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload || [];
      })
      .addCase(fetchYTVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ytVideosSlice.reducer;
