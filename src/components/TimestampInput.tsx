import { TextField } from "@mui/material";
import { Fragment, KeyboardEvent } from "react";

export interface ITimestampInputProps {
  title: string;
  handleTimestampChange: (
    ev: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  handleKeyPress: (ev: KeyboardEvent<HTMLDivElement>) => void;
  endAdornment?: any;
}

export const TimestampInput = (props: ITimestampInputProps) => {
  return (
    <TextField
      label={props.title}
      value={undefined}
      type="number"
      variant="outlined"
      onChange={props.handleTimestampChange}
      onKeyDown={props.handleKeyPress}
      InputProps={{
        endAdornment: <Fragment>{props.endAdornment}</Fragment>,
        inputProps: { min: 0 },
      }}
      fullWidth
    />
  );
};
