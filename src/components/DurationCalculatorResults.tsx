import { Grid, Typography } from "@mui/material";
import { Duration } from "luxon";

export interface IDurationCalculatorResultsProps {
  duration: Duration;
}

const getDurationString = (duration: Duration) => {
  return duration.toHuman({ listStyle: "narrow", unitDisplay: "short" });
};

export const DurationCalculatorResults = (
  props: IDurationCalculatorResultsProps
) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography sx={{ m: 1, fontWeight: "bold" }}>
          {getDurationString(props.duration)}
        </Typography>
      </Grid>

      <TableHeading size={12} title="Totals" />

      <TableHeading size={1} title="hrs" />
      <TableItem size={5} title={props.duration.as("hours").toFixed(4)} />

      <TableHeading size={1} title="yrs" />
      <TableItem size={5} title={props.duration.as("years").toFixed(4)} />

      <TableHeading size={1} title="mins" />
      <TableItem size={5} title={props.duration.as("minutes").toFixed(4)} />

      <TableHeading size={1} title="mths" />
      <TableItem size={5} title={props.duration.as("months").toFixed(4)} />

      <TableHeading size={1} title="s" />
      <TableItem size={5} title={props.duration.as("seconds").toFixed(4)} />

      <TableHeading size={1} title="dys" />
      <TableItem size={5} title={props.duration.as("days").toFixed(4)} />

      <TableHeading size={1} title="ms" />
      <TableItem size={5} title={props.duration.toMillis().toFixed(4)} />
    </Grid>
  );
};

const TableHeading = ({ title, size }: { title: string; size: number }) => {
  return (
    <Grid item xs={size}>
      <Typography sx={{ m: 1, fontWeight: "bold" }}>{title}</Typography>
    </Grid>
  );
};

const TableItem = ({
  title,
  size,
}: {
  title: string | number;
  size: number;
}) => {
  return (
    <Grid item xs={size}>
      <Typography sx={{ m: 1 }}>{title}</Typography>
    </Grid>
  );
};
