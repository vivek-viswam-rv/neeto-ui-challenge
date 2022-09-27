import React from "react";

import { Clock } from "neetoicons";
import { Avatar, Tag, Typography, Tooltip } from "neetoui";
import { timeAgoInWords } from "utils";

import DropdownMenu from "./DropdownMenu";

const Note = ({
  title,
  description,
  assignedContact,
  tags,
  createdOn,
  editClick,
  deleteClick,
}) => (
  <div className="note-wrapper neeto-ui-rounded-sm neeto-ui-border-gray-300 neeto-ui-shadow-xs m-4 grid flex-1 divide-y border p-4 hover:scale-150">
    <div className="note-container mb-4">
      <div className="note-title flex justify-between">
        <Typography style="h4">{title}</Typography>
        <DropdownMenu
          className="cursor-pointer"
          handleDelete={deleteClick}
          handleEdit={editClick}
        />
      </div>
      <Typography className="neeto-ui-text-gray-600 mt-1" style="body2">
        {description}
      </Typography>
    </div>
    <div className="note-footer grid grid-cols-3 pt-3">
      <div className="col-span-2 col-start-1">
        {tags.map((tag, idx) => (
          <Tag className="m-1" key={idx} label={tag} />
        ))}
      </div>
      <div className="flex justify-end">
        <Clock className="mr-1" size={17} />
        <Tooltip content={createdOn} position="bottom-end">
          <Typography className="mr-1" style="body3">
            Created {timeAgoInWords(createdOn)}
          </Typography>
        </Tooltip>
        <Avatar
          size="small"
          user={{
            name: assignedContact,
          }}
        />
      </div>
    </div>
  </div>
);

export default Note;
