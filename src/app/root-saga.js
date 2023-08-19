import { takeLatest } from 'redux-saga/effects'
import { fetchJobs } from '../containers/JobDisplay/store/jobDisplaySlice';
import { jobDetailsSaga } from '../containers/JobDisplay/store/jobDisplaySaga';
import { deleteJob, saveJob, updateJob } from '../containers/JobCreation/store/jobCreationSlice';
import {jobDeleteSaga, jobSaveSaga, jobUpdateSaga} from '../containers/JobCreation/store/jobCreationSaga';

function* rootSaga() {
  yield takeLatest(fetchJobs.type, jobDetailsSaga);
  yield takeLatest(saveJob.type, jobSaveSaga);
  yield takeLatest(updateJob.type, jobUpdateSaga);
  yield takeLatest(deleteJob.type, jobDeleteSaga);
}

export default rootSaga;