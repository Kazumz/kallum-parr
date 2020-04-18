export default function isNullOrUndefined(data: {}): data is null | undefined {
    return data === undefined || data === null;
}