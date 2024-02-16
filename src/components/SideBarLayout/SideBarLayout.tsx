import { Stack } from "@mui/material";
import SideBar from "../SideBar/SideBar";
import { useEffect } from "react";
import { useSideBar } from "../../context/sidebar-context";
import { useTheme } from "../../context/theme-context";

function SideBarLayout({ children }: any) {
  const { isCollapsed } = useSideBar();
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      <Stack
        direction="row"
        className={`w-screen h-screen bg-primary dark:bg-secondary text-secondary dark:text-primary`}
      >
        <div className={`${isCollapsed ? `w-2/12 lg:w-1/12` : `w-1/4`}`}>
          <SideBar />
        </div>
        <Stack
          direction={"column"}
          gap={"1rem"}
          className={`${
            isCollapsed ? `w-10/12 lg:w-11/12` : `w-3/4`
          } h-screen overflow-y-auto p-8`}
        >
          {children}
        </Stack>
      </Stack>
    </div>
  );
}

export default SideBarLayout;
