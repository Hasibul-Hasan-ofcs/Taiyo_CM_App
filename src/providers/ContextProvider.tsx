import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactElement;
}

type ContextType = {
  sideBarActive: boolean;
  setSideBarActive: (open: boolean) => void;
};

export const MainContext = createContext<ContextType | null>(null);

const ContextProvider = ({ children }: Props) => {
  const [sideBarActive, setSideBarActive] = useState(false);

  const data = {
    sideBarActive,
    setSideBarActive,
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export default ContextProvider;
