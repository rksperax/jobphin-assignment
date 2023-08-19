import { call, put } from "redux-saga/effects";
import { deleteJobError, deleteJobSuccess, saveJobError, saveJobSuccess, updateJobError, updateJobSuccess } from "./jobCreationSlice";
import callApi from "../../../app/apiHelper";
import { DELETE_FAILURE_MSG, SAVE_FAILURE_MSG, UPDATE_FAILURE_MSG } from "../../../constants";

export function* jobSaveSaga({ payload }) {
  try {
    const result = yield call(callApi, '/jobs', null, 'POST', payload, null);
    yield put(saveJobSuccess(result));
  } catch (e) {
    yield put(saveJobError(SAVE_FAILURE_MSG));
  }
}

export function* jobUpdateSaga({ payload }) {
  try {
    const result = yield call(callApi, `/jobs/${payload?.id}`, null, 'PUT', payload, null);
    yield put(updateJobSuccess(result));
  } catch (e) {
    yield put(updateJobError(UPDATE_FAILURE_MSG));
  }
}

export function* jobDeleteSaga({ payload }) {
  try {
    const result = yield call(callApi, `/jobs/${payload}`, null, 'DELETE', null, null);
    yield put(deleteJobSuccess(result));
  } catch (e) {
    yield put(deleteJobError(DELETE_FAILURE_MSG));
  }
}