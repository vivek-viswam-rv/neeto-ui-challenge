import React from "react";

import { Avatar, Typography } from "neetoui";

const Card = ({ name, role }) => (
  <div className="flex">
    <Avatar size="large" user={{ name }} />
    <div className="m-1">
      <Typography style="h5">{name}</Typography>
      <Typography className="neeto-ui-text-gray-600" style="body3">
        {role}
      </Typography>
    </div>
  </div>
);

export default Card;
