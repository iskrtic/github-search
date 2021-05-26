import { RESET, POSTAVI_USER, POSTAVI_REPOS } from "./actions";

const initialState = { name: null, listaRepos: null };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case POSTAVI_USER:
      return { ...state, name: action.payload };
    case POSTAVI_REPOS:
      return { ...state, listaRepos: action.payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
}
