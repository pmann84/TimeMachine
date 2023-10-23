import { KeyboardEvent, useContext, useState } from "react";
import { Box } from "@mui/material";
import { DateAdapterContext } from "./DateAdapterContext";
import { TimestampConverterResults } from "./TimestampConverterResults";
import { SectionHeader } from "./SectionHeader";
import { TimestampInput } from "./TimestampInput";
import { DateTime } from "luxon";
import { SubmitAdornment } from "./SubmitAdornment";

export const TimestampConverter = () => {
  const [timestamp, setTimestamp] = useState<number>(0);
  const [convertedTimestampUtc, setConvertedTimestampUtc] =
    useState<DateTime>();
  const [convertedTimestampLocal, setConvertedTimestampLocal] =
    useState<DateTime>();

  const { adapter } = useContext(DateAdapterContext);

  const handleTimestampChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTimestamp(parseInt(e.target.value));
  };

  const handleTimestampConversion = () => {
    if (adapter && timestamp) {
      // TODO: Get the correct type to be infered here
      const convertedTimestampUtc = adapter.toUtc(timestamp) as DateTime;
      setConvertedTimestampUtc(convertedTimestampUtc);
      const convertedTimestampLocal = adapter.toLocal(timestamp) as DateTime;
      setConvertedTimestampLocal(convertedTimestampLocal);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    // Handle enter on input for ease of use
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      handleTimestampConversion();
    }
  };

  return (
    <Box sx={{ my: 4 }}>
      <SectionHeader
        title="Timestamp Conversion"
        description="Converts a ms since epoch timestamp to a human readable datetime"
      />
      <TimestampInput
        title="timestamp (ms)"
        handleKeyPress={handleKeyPress}
        handleTimestampChange={handleTimestampChange}
        endAdornment={
          <SubmitAdornment
            submitTitle="to Datetime"
            onSubmit={handleTimestampConversion}
          />
        }
      />
      {convertedTimestampUtc && convertedTimestampLocal && (
        <TimestampConverterResults
          convertedTimestampUtc={convertedTimestampUtc}
          convertedTimestampLocal={convertedTimestampLocal}
        />
      )}
    </Box>
  );
};
