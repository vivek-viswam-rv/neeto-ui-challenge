import * as R from "ramda";
import slugify from "slugify";

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);

export const buildSelectOption = item => ({
  label: item,
  value: slugify(item),
});

export { v4 as getUUID } from "uuid";
