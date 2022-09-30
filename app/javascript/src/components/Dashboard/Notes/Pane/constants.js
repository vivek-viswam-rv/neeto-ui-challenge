import slugify from "slugify";
import { buildSelectOption } from "utils";
import * as yup from "yup";

import { CONTACTS, TAGS } from "components/Dashboard/constants";

const CONTACT_NAMES = CONTACTS.map(
  contact => `${contact.firstName} ${contact.lastName}`
);

export const FORM_INITIAL_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: [],
};

export const TAG_OPTIONS = TAGS.map(buildSelectOption);
export const CONTACT_OPTIONS = CONTACTS.map(contact =>
  buildSelectOption(`${contact.firstName} ${contact.lastName}`)
);

export const FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup
    .object()
    .shape({
      label: yup.string().oneOf(CONTACT_NAMES),
      value: yup.string().oneOf(CONTACT_NAMES.map(slugify)),
    })
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
