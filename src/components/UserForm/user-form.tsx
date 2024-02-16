import { FormControl, StyledEngineProvider, TextField } from "@mui/material";
import { useState } from "react";
import CustomButton from "../CustomButton/custom-button";
import { User } from "../../shared/interfaces";

interface UserFormProps {
  user: User;
  onSubmit: (user: User) => void;
  onCancel: () => void;
}

function UserForm({ user, onSubmit, onCancel }: UserFormProps) {
  const [inputs, setInputs] = useState({
    UserID: user.UserID,
    FirstName: user.FirstName,
    LastName: user.LastName,
    Age: user.Age,
  });
  const handleInputChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    if (event.target.name === "Age") {
      setInputs((values) => ({ ...values, [name]: parseInt(value) }));
    } else {
      setInputs((values) => ({ ...values, [name]: value }));
    }
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    //alert(JSON.stringify(inputs));
    onSubmit(inputs as User);
  };
  return (
    <StyledEngineProvider injectFirst>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <TextField
            label="First Name"
            type="text"
            name="FirstName"
            value={inputs.FirstName}
            onChange={handleInputChange}
            required
            className="pt-0 pb-4"
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Last Name"
            type="text"
            name="LastName"
            value={inputs.LastName}
            onChange={handleInputChange}
            required
            className="pt-0 pb-4"
          />
        </FormControl>{" "}
        <FormControl fullWidth>
          <TextField
            label="Age"
            type="number"
            name="Age"
            value={inputs.Age || ""}
            onChange={handleInputChange}
            required
            className="pt-0 pb-4"
          />
        </FormControl>
        <div className="flex flex-row justify-end">
          <span className="mr-4">
            <CustomButton type="submit">
              {user.FirstName ? "Save" : "Create"}
            </CustomButton>
          </span>
          <CustomButton onClick={onCancel}>Cancel</CustomButton>
        </div>
      </form>
    </StyledEngineProvider>
  );
}

export default UserForm;
