import slugify from "slugify";
import { buildSelectOption } from "utils";
import * as yup from "yup";

import { CONTACTS, TAGS } from "components/Dashboard/constants";

export const EMPTY_NOTE = {
  title: "",
  description: "",
  assignedContact: "",
  tags: [],
};

export const TAG_OPTIONS = TAGS.map(buildSelectOption);
export const CONTACT_OPTIONS = CONTACTS.map(contact =>
  buildSelectOption(`${contact.firstName} ${contact.lastName}`)
);

export const VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup
    .object()
    .nullable()
    .required("Assigned contact required"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().oneOf(TAGS),
        value: yup.string().oneOf(TAGS.map(slugify)),
      })
    )
    .min(1, "Select atleast 1 tag")
    .required("Tag is required"),
});
