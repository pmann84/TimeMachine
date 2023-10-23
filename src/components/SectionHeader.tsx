import { Tooltip, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export interface ISectionHeaderProps {
  title: string;
  description?: string;
}

export const SectionHeader = (props: ISectionHeaderProps) => {
  return (
    <Typography variant="h5" component="h1" gutterBottom>
      {props.title}
      {props.description && props.description !== "" && (
        <Tooltip title={props.description}>
          <InfoOutlinedIcon sx={{ paddingBottom: 1.5 }} />
        </Tooltip>
      )}
    </Typography>
  );
};
