import { all } from "redux-saga/effects";
import { watcherSaga as planetSaga } from "./ducks";

export default function*() {
  yield all([planetSaga()]);
}
