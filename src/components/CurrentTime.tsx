import { Card, CardContent, Typography, styled } from "@mui/material";
import { DateTime } from "luxon";
import { useEffect, useRef, useState } from "react";

const getCurrentSec = () => {
  return Math.floor(DateTime.now().toMillis() / 1000);
};

export const CurrentTime = () => {
  const countRef = useRef<NodeJS.Timer | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(getCurrentSec());

  const startClock = () => {
    countRef.current = setInterval(() => {
      setCurrentTime(getCurrentSec());
    }, 1000);
  };

  const stopClock = () => {
    if (countRef.current) {
      clearInterval(countRef.current);
    }
  };

  useEffect(() => {
    startClock();
    return () => {
      stopClock();
    };
  }, []);

  return (
    <Card
      sx={{
        maxWidth: 165,
        maxHeight: 45,
        paddingX: 1,
        paddingY: 0.5,
      }}
    >
      <CardContentNoPadding sx={{ padding: 0 }}>
        <Typography sx={{ fontSize: 10 }} gutterBottom>
          Current Time (s)
        </Typography>
        <Typography sx={{ fontSize: 12 }}>{currentTime}</Typography>
      </CardContentNoPadding>
    </Card>
  );
};

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);
