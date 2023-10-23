import { IDateAdapter, ITimestampDifferenceResults } from "./IDateAdapter";
import { DateTime } from "luxon";

export class LuxonDateAdapter implements IDateAdapter<DateTime> {
    toMillis(dateTime: string): number {
        return DateTime.fromISO(dateTime).toMillis();
    }
    isValidDateTime(dateTime: string): boolean {
        return DateTime.fromISO(dateTime).isValid;
    }
    difference(fromTimestamp: number, toTimestamp: number): ITimestampDifferenceResults {
        const from = DateTime.fromMillis(fromTimestamp).toUTC();
        const to = DateTime.fromMillis(toTimestamp).toUTC();
        const duration = to >= from ? to.diff(from) : from.diff(to);
        return {
            totalms: duration.valueOf()
        }
    }
    toUtc(timestamp: number): DateTime {
        return DateTime.fromMillis(timestamp).toUTC();
    }
    toLocal(timestamp: number): DateTime {
        return DateTime.fromMillis(timestamp).toLocal();
    }
    toISOString(dt: DateTime): string {
        return dt.toISO() ?? "";
    }
}