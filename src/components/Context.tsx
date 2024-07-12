import React, { createContext, useContext, useState } from "react";

interface ContextProps {
  tabSelected : string,
  setTabSelected: React.Dispatch<React.SetStateAction<string>>,
}

const initialValues: ContextProps = {
  tabSelected : '',
  setTabSelected: () => {},
}

export const DataContext = createContext<ContextProps>(initialValues);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {

  const [tabSelected, setTabSelected] = useState('upload');

  const values: ContextProps = {
    tabSelected,
    setTabSelected
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const useData = () => {
  return useContext(DataContext);
};
