import { KeyboardEvent, useContext, useState } from "react";
import { Box } from "@mui/material";
import { DateAdapterContext } from "./DateAdapterContext";
import { SectionHeader } from "./SectionHeader";
import { SubmitAdornment } from "./SubmitAdornment";
import { DateTimeInput } from "./DateTimeInput";
import { DateTimeConverterResults } from "./DateTimeConverterResults";

export const DateTimeConverter = () => {
  const [dateTime, setDateTime] = useState<string>("");
  const [convertedDateTimeEpochMs, setConvertedDateTimeEpochMs] =
    useState<number>();

  const { adapter } = useContext(DateAdapterContext);

  const handleDateTimeChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setDateTime(e.target.value);
  };

  const handleDateTimeConversion = () => {
    if (adapter && dateTime) {
      // TODO: Get the correct type to be infered here
      const ms = adapter.toMillis(dateTime);
      setConvertedDateTimeEpochMs(ms);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    // Handle enter on input for ease of use
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      handleDateTimeConversion();
    }
  };

  return (
    <Box sx={{ my: 4 }}>
      <SectionHeader
        title="Date Time Conversion"
        description="Converts an ISO datetime string to a timestamp in ms since epoch"
      />
      <DateTimeInput
        title="datetime string"
        handleKeyPress={handleKeyPress}
        handleChange={handleDateTimeChange}
        endAdornment={
          <SubmitAdornment
            submitTitle="to Timestamp"
            onSubmit={handleDateTimeConversion}
          />
        }
      />
      {convertedDateTimeEpochMs && (
        <DateTimeConverterResults
          convertedDateTimeEpochMs={convertedDateTimeEpochMs}
        />
      )}
    </Box>
  );
};
