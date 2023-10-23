import { Grid, Typography } from "@mui/material";
import { DateTime } from "luxon";

export interface ITimestampConverterResultsProps {
  // todo: make this not take a Datetime
  convertedTimestampUtc: DateTime;
  convertedTimestampLocal: DateTime;
}

export const TimestampConverterResults = (
  props: ITimestampConverterResultsProps
) => {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Typography sx={{ m: 1, fontWeight: "bold" }}>UTC</Typography>
      </Grid>
      <Grid item xs={11}>
        <Typography sx={{ m: 1 }}>
          {props.convertedTimestampUtc.toISO()}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography sx={{ m: 1, fontWeight: "bold" }}>Local</Typography>
      </Grid>
      <Grid item xs={11}>
        <Typography sx={{ m: 1 }}>
          {props.convertedTimestampLocal.toISO()}
        </Typography>
      </Grid>
    </Grid>
  );
};
