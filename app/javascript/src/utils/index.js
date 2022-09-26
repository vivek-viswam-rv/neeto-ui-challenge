import dayjs from "dayjs";
import * as R from "ramda";

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);
export const timeAgoInWords = dateTime => dayjs(dateTime).fromNow();
