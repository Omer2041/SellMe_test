import { call, put } from "redux-saga/effects";
import { setData } from "../../ducks/data";
import { requestGetData } from "../requests/dataRequest";

export function* handleGetData(action) {
  try {
    const response = yield call(requestGetData);
    const { data } = response;
    yield put(setData(data));
  } catch (error) {
    console.log(error);
  }
}
