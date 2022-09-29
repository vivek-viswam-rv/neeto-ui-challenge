import React from "react";

import Card from "./Card";
import DropdownMenu from "./DropdownMenu";

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
    render: DropdownMenu,
  },
];
