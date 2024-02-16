import { createContext, useContext, useEffect, useState } from "react";

const SideBarContext = createContext<{
  isCollapsed: boolean;
  toggleIsCollapsed: () => void;
}>({
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
