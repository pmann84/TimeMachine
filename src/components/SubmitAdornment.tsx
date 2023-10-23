import { IconButton, InputAdornment, Tooltip } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export interface ISubmitAdornmentProps {
  submitTitle?: string;
  onSubmit: () => void;
}

export const SubmitAdornment = (props: ISubmitAdornmentProps) => {
  return (
    <InputAdornment position="end">
      <Tooltip title={props.submitTitle ?? "submit"}>
        <IconButton edge="end" onClick={props.onSubmit}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Tooltip>
    </InputAdornment>
  );
};
