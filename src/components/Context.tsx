import React, { createContext, useContext, useEffect, useState } from "react";

interface ContextProps {
  tabSelected: string;
  setTabSelected: React.Dispatch<React.SetStateAction<string>>;
  estikers: string[];
  cropImage: boolean;
  setEstikers: React.Dispatch<React.SetStateAction<string[]>>;
}

const initialValues: ContextProps = {
  tabSelected: "",
  setTabSelected: () => {},
  estikers: [],
  setEstikers: () => {},
  cropImage: true,
};

export const DataContext = createContext<ContextProps>(initialValues);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [tabSelected, setTabSelected] = useState<string>("upload");
  const [estikers, setEstikers] = useState<string[]>([]);

  
  const [cropImage, setCropImage] = useState(initialValues.cropImage);

  

  const values: ContextProps = {
    tabSelected,
    setTabSelected,
    estikers,
    setEstikers,
    cropImage,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const useData = () => {
  return useContext(DataContext);
};
