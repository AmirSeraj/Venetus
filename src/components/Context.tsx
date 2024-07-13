import React, { createContext, useContext, useState } from "react";

interface ContextProps {
  tabSelected : string,
  setTabSelected: React.Dispatch<React.SetStateAction<string>>,
  estikers : string[],
  setEstikers: React.Dispatch<React.SetStateAction<string[]>>,
}

const initialValues: ContextProps = {
  tabSelected : '',
  setTabSelected: () => {},
  estikers: [],
  setEstikers: () => {},
}

export const DataContext = createContext<ContextProps>(initialValues);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [tabSelected, setTabSelected] = useState<string>('upload');
  const [estikers, setEstikers] = useState<string[]>([]);

  const values: ContextProps = {
    tabSelected,
    setTabSelected,
    estikers,
    setEstikers
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const useData = () => {
  return useContext(DataContext);
};
