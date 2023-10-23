import { Grid, Typography } from "@mui/material";

export interface IDateTimeConverterResultsProps {
  // todo: make this not take a Datetime
  convertedDateTimeEpochMs: number;
}

export const DateTimeConverterResults = (
  props: IDateTimeConverterResultsProps
) => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Typography sx={{ m: 1, fontWeight: "bold" }}>
          ms since epoch
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography sx={{ m: 1 }}>{props.convertedDateTimeEpochMs}</Typography>
      </Grid>
    </Grid>
  );
};
