import slugify from "slugify";
import * as yup from "yup";

import { TAGS } from "../constants";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: "",
  tags: [],
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup.object().required("Assigned contact required"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().oneOf(TAGS),
        value: yup.string().oneOf(TAGS.map(slugify)),
      })
    )
    .min(1)
    .required("Tag is required"),
});
