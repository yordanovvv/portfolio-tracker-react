import { createContext, useContext, useEffect, useState } from "react";
import { Sidebar } from "../shared/interfaces";

const SideBarContext = createContext<Sidebar>({
  isCollapsed: false,
  toggleIsCollapsed: () => {},
});

export const SideBarProvider = ({ children }: any) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  useEffect(() => {
    setIsCollapsed(
      JSON.parse(localStorage.getItem("isCollapsed") || "false") || false
    );
  }, []);

  const toggleIsCollapsed = () => {
    setIsCollapsed((prev) => {
      localStorage.setItem("isCollapsed", JSON.stringify(!prev));
      return !prev;
    });
  };

  return (
    <SideBarContext.Provider value={{ isCollapsed, toggleIsCollapsed }}>
      {children}
    </SideBarContext.Provider>
  );
};

export const useSideBar = () => useContext(SideBarContext);
