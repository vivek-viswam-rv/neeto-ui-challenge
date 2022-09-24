import * as R from "ramda";

export * from "./time";

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);
