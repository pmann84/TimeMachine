import dayjs from "dayjs";
import dayjs_plugin_utc from "dayjs/plugin/utc";
import { IDateAdapter, ITimestampDifferenceResults } from "./IDateAdapter";

dayjs.extend(dayjs_plugin_utc);

export class DayjsDateAdapter implements IDateAdapter<dayjs.Dayjs> {
    toMillis(dateTime: string): number {
        throw new Error("Method not implemented.");
    }
    isValidDateTime(dateTime: string): boolean {
        return dayjs(dateTime).isValid();
    }
    difference(fromTimestamp: number, toTimestamp: number): ITimestampDifferenceResults {
        const from = dayjs.utc(fromTimestamp);
        const to = dayjs.utc(toTimestamp);
        const durationMs = to >= from ? to.diff(from) : from.diff(to);
        return {
            totalms: durationMs
        }
    }
    toUtc(timestamp: number): dayjs.Dayjs {
        return dayjs.utc(timestamp);
    }
    toLocal(timestamp: number): dayjs.Dayjs {
        return dayjs(timestamp);
    }
    toISOString(dt: dayjs.Dayjs): string {
        return dt.format();
    }
}