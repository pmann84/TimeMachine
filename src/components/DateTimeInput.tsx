import { TextField } from "@mui/material";
import { useContext, useState, KeyboardEvent, Fragment } from "react";
import { DateAdapterContext } from "./DateAdapterContext";

export interface IDateTimeInputProps {
  title: string;
  handleChange: (
    ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  handleKeyPress: (ev: KeyboardEvent<HTMLDivElement>) => void;
  endAdornment?: any;
}

export const DateTimeInput = (props: IDateTimeInputProps) => {
  const { adapter } = useContext(DateAdapterContext);
  const [isValid, setIsValid] = useState(true);
  const onChange = (
    ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (adapter) {
      setIsValid(adapter?.isValidDateTime(ev.target.value));
      props.handleChange(ev);
    }
  };

  return (
    <TextField
      label={props.title}
      type="string"
      defaultValue=""
      variant="outlined"
      error={!isValid}
      helperText={isValid ? "" : "Invalid Date"}
      onChange={onChange}
      onKeyDown={props.handleKeyPress}
      InputProps={{
        endAdornment: <Fragment>{props.endAdornment}</Fragment>,
        inputProps: { min: 0 },
      }}
      fullWidth
    />
  );
};
