import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Avatar, Tag, Typography } from "neetoui";

const Note = ({ title, description, assignedContact, tag, onClick }) => (
  <div
    className="note-wrapper neeto-ui-border-gray-300 neeto-ui-shadow-s m-4 grid flex-1 divide-y border p-4 hover:scale-150"
    onClick={onClick}
  >
    <div className="note-container mb-4">
      <div className="note-title flex justify-between">
        <Typography style="h4">{title}</Typography>
        <div className="cursor-pointer">
          <MenuVertical size={17} />
        </div>
      </div>
      <div className="neeto-ui-text-gray-600 mt-1">
        <Typography style="body2">{description}</Typography>
      </div>
    </div>
    <div className="note-footer grid grid-cols-3 pt-3">
      <div className="col-span-2 col-start-1">
        <Tag label={tag} />
      </div>
      <div className="flex justify-end">
        <div className="mr-1">
          <Clock size={17} />
        </div>
        <div className="mr-1">
          <Typography style="body3">Created 10 months ago</Typography>
        </div>
        <Avatar
          size="small"
          user={{
            name: `${assignedContact.firstName} ${assignedContact.lastName}`,
          }}
        />
      </div>
    </div>
  </div>
);

export default Note;
