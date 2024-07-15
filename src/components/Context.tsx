import React, { createContext, useContext, useState } from "react";

interface ContextProps {
  tabSelected: string;
  setTabSelected: React.Dispatch<React.SetStateAction<string>>;
  estikers: string[];
  setEstikers: React.Dispatch<React.SetStateAction<string[]>>;
  cropImage: boolean;
  setCropImage: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues: ContextProps = {
  tabSelected: "",
  setTabSelected: () => {},
  estikers: [],
  setEstikers: () => {},
  cropImage: true,
  setCropImage: () => {},
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
    setCropImage
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const useData = () => {
  return useContext(DataContext);
};
