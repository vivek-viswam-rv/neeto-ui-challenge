import React from "react";

import * as yup from "yup";

import { buildSelectOption } from "utils/index";

import Card from "./Card";
import DropdownMenu from "./DropdownMenu";

import { ROLES } from "../constants";

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  emails: [],
  role: "",
};

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  emails: yup
    .array()
    .min(1, "Please enter atleast one email.")
    .test(
      "are-all-emails-valid",
      "Please make sure all emails are valid.",
      emails => emails.every(({ valid }) => valid)
    )
    .nullable(),
  role: yup.object().required("Role is required"),
});

export const ROLE_OPTIONS = ROLES.map(buildSelectOption);

export const TABLE_COLUMN_DATA = [
  {
    dataIndex: "card",
    key: "card",
    title: "Name & Role",
    render: card => <Card name={card.name} role={card.role} />,
  },
  {
    dataIndex: "emails",
    ellipsis: {
      showTitle: false,
    },
    key: "emails",
    title: "Email",
    render: emails => (
      <div className="flex flex-col">
        {emails.map((email, idx) => (
          <div key={idx}>{email}</div>
        ))}
      </div>
    ),
  },
  {
    dataIndex: "createdAt",
    key: "createdAt",
    title: "Created At",
  },
  {
    dataIndex: "dropdown",
    key: "dropdown",
    render: props => <DropdownMenu {...props} />,
  },
];
