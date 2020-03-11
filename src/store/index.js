import { createStore } from "redux";

const INITIAL_STATE = {
  dispesas: []
};

function dispesas(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_DISPESA":
      return { dispesas: [...action.dispesas] };
    default:
      return state;
  }
}

const store = createStore(dispesas);

export default store;
