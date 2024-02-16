import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  StyledEngineProvider,
  TextField,
} from "@mui/material";
import { useState } from "react";
import CustomButton from "../CustomButton/custom-button";
import { Investment } from "../../shared/interfaces";

interface NewInvestmentFormProps {
  onSubmit: (investment: Investment) => void;
  onCancel: () => void;
}

function NewInvestmentForm({ onSubmit, onCancel }: NewInvestmentFormProps) {
  const [inputs, setInputs] = useState({
    TypeOfInvestment: "",
    Status: true,
    Date: new Date().toLocaleString(),
    Name: "",
    Value: 0,
  });

  const handleInputChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    if (event.target.name === "Value") {
      setInputs((values) => ({ ...values, [name]: parseInt(value) }));
    } else {
      setInputs((values) => ({ ...values, [name]: value }));
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
    onSubmit(inputs as Investment);
  };

  return (
    <StyledEngineProvider injectFirst>
      <form
        onSubmit={handleSubmit}
        className=""
      >
        <FormControl
          fullWidth
          className="pt-0 pb-4"
        >
          <InputLabel id="type-of-investment-label">
            Type of Investment
          </InputLabel>
          <Select
            labelId="type-of-investment-label"
            name="TypeOfInvestment"
            value={inputs.TypeOfInvestment || ""}
            label="Type Of Investment"
            onChange={handleInputChange}
            required
          >
            <MenuItem value="CASH">CASH</MenuItem>
            <MenuItem value="CRYPTO">CRYPTO</MenuItem>
            <MenuItem value="STOCKS">STOCKS</MenuItem>{" "}
            <MenuItem value="GOLD">GOLD</MenuItem>
            <MenuItem value="PROPERTY">PROPERTY</MenuItem>
            <MenuItem value="LAND">LAND</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          className="pt-0 pb-4"
        >
          <TextField
            label="Name"
            type="text"
            name="Name"
            value={inputs.Name || ""}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl
          fullWidth
          className="pt-0 pb-4"
        >
          <TextField
            label="Value"
            type="number"
            name="Value"
            value={inputs.Value || ""}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </FormControl>

        <div className="flex flex-row justify-end">
          <span className="mr-4">
            <CustomButton type="submit">Create</CustomButton>
          </span>
          <CustomButton onClick={onCancel}>Cancel</CustomButton>
        </div>
      </form>
    </StyledEngineProvider>
  );
}

export default NewInvestmentForm;
