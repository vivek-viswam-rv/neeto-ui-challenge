import { buildSelectOption } from "utils";
import * as yup from "yup";

import { ROLES } from "components/Dashboard/constants";

export const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  emails: [],
  role: {},
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
  role: yup.object().required("Role is required").nullable(),
});

export const ROLE_OPTIONS = ROLES.map(buildSelectOption);
