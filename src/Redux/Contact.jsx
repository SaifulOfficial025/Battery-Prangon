import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from './config';

// Async thunk to submit contact/enquiry details
export const submitContact = createAsyncThunk(
  'contact/submitContact',
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/accounts/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: contactData.name,
          email: contactData.email,
          whatsapp_number: contactData.phone,
          description: contactData.query,
          address: contactData.address,
          created_at: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data; // { message: "Message sent successfully." }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    successMessage: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetContactStatus: (state) => {
      state.successMessage = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContact.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(submitContact.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload?.message || 'Message sent successfully.';
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetContactStatus } = contactSlice.actions;
export default contactSlice.reducer;
