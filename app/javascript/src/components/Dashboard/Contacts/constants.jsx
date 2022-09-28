import React from "react";

import * as yup from "yup";

import Card from "./Card";
import DropdownMenu from "./DropdownMenu";

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: "",
  tags: [],
};

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("Title is required"),
});

export const TABLE_COLUMN_DATA = [
  {
    dataIndex: "card",
    key: "card",
    title: "Name & Role",
    render: card => <Card name={card.name} role={card.role} />,
  },
  {
    dataIndex: "email",
    ellipsis: {
      showTitle: false,
    },
    key: "email",
    title: "Email",
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
