import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { KeyboardEvent, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { DurationCalculatorResults } from "./DurationCalculatorResults";
import { DateTimeInput } from "./DateTimeInput";
import { DateTime, Duration } from "luxon";

export const DurationCalculator = () => {
  const [fromTimestamp, setFromTimestamp] = useState<string>("");
  const [toTimestamp, setToTimestamp] = useState<string>("");
  const [duration, setDuration] = useState<Duration | undefined>();

  const handleFromInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFromTimestamp(e.target.value);
  };

  const handleToInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setToTimestamp(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    // Handle enter on input for ease of use
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      handleDurationCalculation();
    }
  };

  const handleDurationCalculation = () => {
    if (fromTimestamp && toTimestamp) {
      const from = DateTime.fromISO(fromTimestamp);
      const to = DateTime.fromISO(toTimestamp);
      const duration =
        from > to ? from.diff(to).shiftToAll() : to.diff(from).shiftToAll();
      setDuration(duration);
    }
  };

  return (
    <Box sx={{ my: 4 }}>
      <SectionHeader
        title="Duration Calculator"
        description="Calculates the duration between to ISO date strings"
      />
      <Stack direction="row" spacing={2}>
        <DateTimeInput
          title="from"
          handleKeyPress={handleKeyPress}
          handleChange={handleFromInputChange}
        />
        <DateTimeInput
          title="to"
          handleKeyPress={handleKeyPress}
          handleChange={handleToInputChange}
        />
        <Tooltip title="Calculate Duration">
          <IconButton edge="end" onClick={handleDurationCalculation}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Tooltip>
      </Stack>
      {duration && <DurationCalculatorResults duration={duration} />}
    </Box>
  );
};
