import React from "react";

import slugify from "slugify";
import * as yup from "yup";

import Card from "./Card";
import DropdownMenu from "./DropdownMenu";

import { TAGS } from "../constants";

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: "",
  tags: [],
};

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
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
    .min(1, "Select atleast 1 tag")
    .required("Tag is required"),
});

export const TABLE_COLUMN_DATA = [
  {
    dataIndex: "card",
    key: "card",
    title: "Name & Role",
    render: card => <Card name={card.name} role={card.role} />,
    width: 150,
  },
  {
    dataIndex: "email",
    ellipsis: {
      showTitle: false,
    },
    key: "email",
    title: "Email",
    width: 200,
  },
  {
    dataIndex: "dropdown",
    key: "dropdown",
    render: props => <DropdownMenu {...props} />,
    width: 10,
  },
];
