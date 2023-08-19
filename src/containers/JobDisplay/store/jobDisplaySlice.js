import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  isJobsLoading: false,
  error: false,
  errorMessage: '',
  allJobs: []
}

export const jobDetailsSlice = createSlice({
  name: 'jobDetails',
  initialState,
  reducers: {
    fetchJobs: (state) => {
      state.isJobsLoading = true;
      state.error = false;
      state.errorMessage = '';
    },
    fetchJobsError: (state, action) => {
      state.isJobsLoading = false;
      state.error = true;
      state.errorMessage = action.payload;
      state.allJobs = [];
    },
    fetchJobsSuccess: (state, action) => {
      state.isJobsLoading = false;
      state.error = false;
      state.errorMessage = '';    
      state.allJobs = action.payload;
    },
  },
})

export const { fetchJobs, fetchJobsSuccess, fetchJobsError } = jobDetailsSlice.actions;

export default jobDetailsSlice.reducer;