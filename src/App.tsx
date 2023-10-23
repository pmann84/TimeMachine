import {
  AppBar,
  Container,
  CssBaseline,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { TimestampConverter } from "./components/TimestampConverter";
import { DurationCalculator } from "./components/DurationCalculator";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { TimeStampConverterProvider } from "./components/DateAdapterContext";
import { LuxonDateAdapter } from "./conversion/LuxonAdapter";
import { DateTimeConverter } from "./components/DateTimeConverter";
import { CurrentTime } from "./components/CurrentTime";
import GitHubIcon from "@mui/icons-material/GitHub";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter"].join(","),
  },
});

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Time Machine
              </Typography>
              <CurrentTime />
            </Toolbar>
          </AppBar>
          <Container maxWidth="sm">
            <TimeStampConverterProvider
              muiAdapter={AdapterLuxon}
              adapter={LuxonDateAdapter}
            >
              <TimestampConverter />
              <DateTimeConverter />
              <DurationCalculator />
            </TimeStampConverterProvider>
          </Container>
          <AppBar
            position="fixed"
            sx={{ top: "auto", bottom: 0, alignItems: "center" }}
            color="transparent"
          >
            <Link
              href="https://github.com/pmann84/TimeMachine"
              sx={{ paddingTop: 1 }}
            >
              <GitHubIcon color="action" />
            </Link>
          </AppBar>
        </CssBaseline>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
