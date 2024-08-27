export interface Child {
  name: string;
}

export interface Guardian {
  name: string;
  relationship: string;
}

export interface State {
  hasChildren: boolean | null;
  children: Child[];
  underageChildren: boolean | null;
  guardians: Guardian[];
}

export type Action =
  | { type: "SET_HAS_CHILDREN"; payload: boolean }
  | { type: "SET_CHILDREN"; payload: Child[] }
  | { type: "SET_UNDERAGE_CHILDREN"; payload: boolean }
  | { type: "SET_GUARDIANS"; payload: Guardian[] }
  | { type: "RESET_STATE" };

export type ApiContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;

  saveData?: (data: State) => void;
};
