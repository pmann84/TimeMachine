export interface ITimestampDifferenceResults {
    totalms: number;
}   

export interface IDateAdapter<DateTimeT> {
    toUtc(timestamp: number) : DateTimeT;
    toLocal(timestamp: number) : DateTimeT;
    difference(fromTimestamp: number, toTimestamp: number) : ITimestampDifferenceResults;
    isValidDateTime(dateTime: string): boolean;
    toISOString(dt: DateTimeT): string;
    toMillis(dateTime: string): number;
}  