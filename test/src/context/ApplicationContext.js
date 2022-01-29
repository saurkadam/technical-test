import React, { useReducer, createContext, useContext } from "react";
import { ApplicationReducer, ApplicationInitialState } from "./ApplicationFile";

export const ApplicationContext = createContext();

export const useApplicationContext = () => useContext(ApplicationContext);

const ApplicationProvider = (props) => {
  const [state, dispatch] = useReducer(
    ApplicationReducer,
    ApplicationInitialState
  );
  return (
    <ApplicationContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </ApplicationContext.Provider>
  );
};
export default ApplicationProvider;
