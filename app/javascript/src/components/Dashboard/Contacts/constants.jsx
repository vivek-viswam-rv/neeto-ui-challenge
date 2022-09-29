import React from "react";

import { getNewKey } from "utils";

import Card from "./Card";
import DropdownMenu from "./DropdownMenu";

export const COLUMN_DATA = [
  {
    dataIndex: "card",
    key: "card",
    title: "Name & Role",
    render: Card,
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
        {emails.map(email => (
          <div key={getNewKey()}>{email}</div>
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
    render: DropdownMenu,
  },
];
