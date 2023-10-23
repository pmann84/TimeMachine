// import { MuiPickersAdapter } from "@mui/x-date-pickers";
import { createContext, useMemo, useState } from "react";
import { IDateAdapter } from "../conversion/IDateAdapter";

export const DateAdapterContext = createContext<{
  adapter: IDateAdapter<unknown> | undefined;
}>({ adapter: undefined });

export const TimeStampConverterProvider: React.FC<{
  children: any;
  adapter: new (...args: any) => IDateAdapter<unknown>;
  // muiAdapter: new (...args: any) => MuiPickersAdapter<unknown>;
}> = ({ children, adapter }) => {
  // const muiAdapterMemo = useMemo<MuiPickersAdapter<unknown>>(
  //   () => new muiAdapter(),
  //   []
  // );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const adapterMemo = useMemo<IDateAdapter<unknown>>(() => new adapter(), []);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [context, setContext] = useState({
    adapter: adapterMemo,
  });

  return (
    <DateAdapterContext.Provider value={context}>
      {children}
    </DateAdapterContext.Provider>
  );
};
