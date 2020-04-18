import isNullOrUndefined from './is-null-or-undefined'

export default function isNullUndefinedOrEmpty(str: string): str is null | undefined | "" {
    return isNullOrUndefined(str) || str === "";
}