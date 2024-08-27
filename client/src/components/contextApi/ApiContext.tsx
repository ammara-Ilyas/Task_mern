import React, { createContext, useContext, useReducer, ReactNode } from "react";
import axios from "axios";
import { State } from "../types/Type";
import { reducer } from "../reducer/ApiReducer";
import { initialState } from "../reducer/ApiReducer";
import { ApiContextType } from "../types/Type";

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const saveData = async (data: State) => {
    try {
      const response = await axios.post(`http://localhost:8000/api/will`, data);

      console.log("response", response);
      if (response.status === 201) {
        dispatch({ type: "RESET_STATE" });
      }
    } catch (error) {
      console.error("Failed to post data:", error);
    }
  };

  return (
    <ApiContext.Provider value={{ state, dispatch, saveData }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApiContext must be used within an ApiProvider");
  }
  return context;
};
