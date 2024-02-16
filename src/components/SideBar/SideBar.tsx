import { Icon, Link, Stack, StyledEngineProvider } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {
  DarkMode,
  Home,
  LightMode,
  PriceChange,
  Settings,
} from "@mui/icons-material";
import { useSideBar } from "../../context/sidebar-context";
import { useTheme } from "../../context/theme-context";

function SideBar() {
  const { isCollapsed, toggleIsCollapsed } = useSideBar();
  const { theme, toggleTheme } = useTheme();
  const LINK_CLASS_NAMES =
    "flex flex-row flex-wrap items-center justify-center w-11/12 text-center bg-secondary dark:bg-primary text-primary dark:text-secondary";
  const ICON_CLASS_NAMES = "inline-flex items-center justify-center";
  return (
    <StyledEngineProvider injectFirst>
      <nav
        className={`h-screen w-full flex flex-row flex-wrap  justify-center items-start border-r border-secondary dark:border-primary`}
      >
        {" "}
        <div className="w-full flex justify-end ">
          <Icon
            onClick={toggleIsCollapsed}
            fontSize="large"
            className={`inline-flex bg-secondary dark:bg-primary text-primary dark:text-secondary cursor-pointer`}
          >
            {isCollapsed ? (
              <KeyboardDoubleArrowRightIcon />
            ) : (
              <KeyboardDoubleArrowLeftIcon />
            )}
          </Icon>
        </div>
        <Stack
          direction="column"
          gap={4}
          className="w-full items-center"
        >
          <Link
            href="/"
            underline="hover"
            className={LINK_CLASS_NAMES}
          >
            <Home
              fontSize="large"
              className={ICON_CLASS_NAMES}
            />
            {!isCollapsed && <span>Home</span>}
          </Link>
          <Link
            href="/investments"
            underline="hover"
            className={LINK_CLASS_NAMES}
          >
            <PriceChange
              fontSize="large"
              className={ICON_CLASS_NAMES}
            />
            {!isCollapsed && <span>Investments</span>}
          </Link>
          <Link
            href="/settings"
            underline="hover"
            className={LINK_CLASS_NAMES}
          >
            <Settings
              fontSize="large"
              className={ICON_CLASS_NAMES}
            />
            {!isCollapsed && <span>Settings</span>}
          </Link>
        </Stack>
        <div
          className={`${LINK_CLASS_NAMES} cursor-pointer`}
          onClick={() => {
            toggleTheme();
          }}
        >
          {theme === "dark" && <LightMode />}
          {theme === "light" && <DarkMode />}
          <span>{theme === "dark" ? "Light" : "Dark"} Mode</span>
        </div>
      </nav>
    </StyledEngineProvider>
  );
}

export default SideBar;
