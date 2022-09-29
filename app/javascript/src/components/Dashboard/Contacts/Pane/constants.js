import slugify from "slugify";
import { buildSelectOption } from "utils";
import * as yup from "yup";

import { ROLES } from "components/Dashboard/constants";

export const EMPTY_CONTACT = {
  firstName: "",
  lastName: "",
  emails: [],
  role: "",
};

export const VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  emails: yup
    .array()
    .min(1, "Please enter atleast one email.")
    .test(
      "are-all-emails-valid",
      "Please make sure all emails are valid.",
      emails => emails.every(({ valid }) => valid)
    ),
  role: yup
    .object()
    .shape({
      label: yup.string().oneOf(ROLES),
      value: yup.string().oneOf(ROLES.map(slugify)),
    })
    .required("Role is required")
    .nullable(),
});

export const ROLE_OPTIONS = ROLES.map(buildSelectOption);
