import { createSlice } from "@reduxjs/toolkit";
import { all, call, put, takeEvery } from "redux-saga/effects";
import PlanetAPI from "./api/PlanetAPI";

export const planetSlice = createSlice({
  name: "planetSlice",
  initialState: {
    loading: false,
    planets: [],
    message: ""
  },
  reducers: {
    setLoader: (state, { payload }) => {
      state.loading = payload;
    },
    fetch: state => {
      state.loading = true;
    },
    success: (state, { payload }) => {
      state.planets = payload;
      state.loading = false;
    },
    error: (state, { payload }) => {
      console.log("------", payload)
      state.error = true;
      state.message = payload;
      state.loading = false;
    }
  }
});

function* fetchPlanet(action) {
  try {
    const planets = yield call(PlanetAPI.fetch, action.payload.userId);
    yield put(planetSlice.actions.success(planets));
  } catch (e) {
    yield put(planetSlice.actions.error("Fialed to load planets"));
  }
}

export function* watcherSaga() {
  yield all([
    yield takeEvery(planetSlice.actions.fetch, fetchPlanet)
  ]);
}
