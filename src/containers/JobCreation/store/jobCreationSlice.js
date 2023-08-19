import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  isJobsSaving: false,
  jobsSaveError: false,
  jobsSaveErrorMessage: '',
  jobsSaveSuccess: false,
  isJobsUpdating: false,
  jobsUpdateError: false,
  jobsUpdateErrorMessage: '',
  jobsUpdateSuccess: false,
  isJobDeleting: false,
  jobDeleteSuccess: false,
  jobDeleteError: false,
  jobDeleteErrorMessage: ''
}

export const jobDetailsSlice = createSlice({
  name: 'jobsCreation',
  initialState,
  reducers: {
    saveJob: (state) => {
      state.isJobsSaving = true;
      state.jobsSaveError = false;
      state.jobsSaveErrorMessage = '';
      state.jobsSaveSuccess = false;
    },
    saveJobError: (state, action) => {
      state.isJobsSaving = false;
      state.jobsSaveError = true;
      state.jobsSaveErrorMessage = action.payload;
    },
    saveJobSuccess: (state, action) => {
      state.isJobsSaving = false;
      state.jobsSaveError = false;
      state.jobsSaveErrorMessage = '';    
      state.jobsSaveSuccess = true;
    },
    resetSaveJobs: (state) => {
      state.isJobsSaving = false;
      state.jobsSaveError = false;
      state.jobsSaveErrorMessage = '';
      state.jobsSaveSuccess = false;
    },
    updateJob: (state) => {
      state.isJobsUpdating = true;
      state.jobsUpdateError = false;
      state.jobsUpdateErrorMessage = '';
      state.jobsUpdateSuccess = false;
    },
    updateJobError: (state, action) => {
      state.isJobsUpdating = false;
      state.jobsUpdateError = true;
      state.jobsUpdateErrorMessage = action.payload;
    },
    updateJobSuccess: (state, action) => {
      state.isJobsUpdating = false;
      state.jobsUpdateError = false;
      state.jobsUpdateErrorMessage = '';    
      state.jobsUpdateSuccess = true;
    },
    resetUpdateJob: (state) => {
      state.isJobsUpdating = false;
      state.jobsUpdateError = false;
      state.jobsUpdateErrorMessage = '';
      state.jobsUpdateSuccess = false;
    },
    deleteJob: (state) => {
      state.isJobDeleting = true;
      state.jobDeleteError = false;
      state.jobDeleteErrorMessage = '';
      state.jobDeleteSuccess = false;
    },
    deleteJobError: (state, action) => {
      state.isJobDeleting = false;
      state.jobDeleteError = true;
      state.jobDeleteErrorMessage = action.payload;
    },
    deleteJobSuccess: (state, action) => {
      state.isJobDeleting = false;
      state.jobDeleteError = false;
      state.jobDeleteErrorMessage = '';    
      state.jobDeleteSuccess = true;
    },
    resetDeleteJob: (state) => {
      state.isJobDeleting = false;
      state.jobDeleteError = false;
      state.jobDeleteErrorMessage = '';
      state.jobDeleteSuccess = false;
    }
  },
})

export const { saveJob, saveJobSuccess, saveJobError, resetSaveJobs, updateJob, updateJobSuccess, updateJobError, resetUpdateJob, deleteJob, deleteJobError, deleteJobSuccess, resetDeleteJob } = jobDetailsSlice.actions;

export default jobDetailsSlice.reducer;