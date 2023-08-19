import { call, put } from "redux-saga/effects";
import { fetchJobsError, fetchJobsSuccess } from "./jobDisplaySlice";
import callApi from "../../../app/apiHelper";

export function* jobDetailsSaga({ payload }) {
  try {
    const result = yield call(callApi, '/jobs', null, 'GET', payload, null);
    yield put(fetchJobsSuccess(result));
  } catch (e) {
    yield put(fetchJobsError('Error while trying to fetch jobs. Please try again'));
  }
}