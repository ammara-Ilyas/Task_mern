import { State, Action } from "../types/Type";

export const initialState: State = {
  hasChildren: null,
  children: [{ name: "" }],
  underageChildren: null,
  guardians: [{ name: "", relationship: "Parent" }],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_HAS_CHILDREN":
      return { ...state, hasChildren: action.payload };
    case "SET_CHILDREN":
      return { ...state, children: action.payload };
    case "SET_UNDERAGE_CHILDREN":
      return { ...state, underageChildren: action.payload };
    case "SET_GUARDIANS":
      return { ...state, guardians: action.payload };
    default:
      return state;
  }
};
