import { useApiContext } from "../contextApi/ApiContext";
import { Child, Guardian } from "../types/Type";

export const useSetHasChildren = () => {
  const { dispatch } = useApiContext();
  return (hasChildren: boolean) =>
    dispatch({ type: "SET_HAS_CHILDREN", payload: hasChildren });
};

export const useSetChildren = () => {
  const { dispatch } = useApiContext();
  return (children: Child[]) =>
    dispatch({ type: "SET_CHILDREN", payload: children });
};

export const useSetUnderageChildren = () => {
  const { dispatch } = useApiContext();
  return (underageChildren: boolean) =>
    dispatch({ type: "SET_UNDERAGE_CHILDREN", payload: underageChildren });
};

export const useSetGuardians = () => {
  const { dispatch } = useApiContext();
  return (guardians: Guardian[]) =>
    dispatch({ type: "SET_GUARDIANS", payload: guardians });
};
