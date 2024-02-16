import { Button, ButtonProps, StyledEngineProvider } from "@mui/material";

function CustomButton(props: ButtonProps) {
  return (
    <StyledEngineProvider injectFirst>
      <Button
        className={`min-w-fit bg-secondary dark:bg-primary text-primary dark:text-secondary border border-secondary dark:border-primary hover:border-secondary dark:hover:border-primary hover:text-secondary dark:hover:text-primary hover:bg-primary dark:hover:bg-secondary`}
        variant="outlined"
        {...props}
      ></Button>
    </StyledEngineProvider>
  );
}

export default CustomButton;
