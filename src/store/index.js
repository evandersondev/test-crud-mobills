import { createStore } from "redux";

const INITIAL_STATE = {
  expenses: []
};

function dispesas(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_DISPESA":
      return { expenses: [...action.expenses] };
    default:
      return state;
  }
}

const store = createStore(dispesas);

export default store;
