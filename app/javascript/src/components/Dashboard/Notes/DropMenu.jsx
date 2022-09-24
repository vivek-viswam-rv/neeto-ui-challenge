import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown } from "neetoui";

const DropMenu = ({ onClick }) => {
  const { Menu, MenuItem } = Dropdown;

  return (
    <Dropdown customTarget={<MenuVertical size={17} />}>
      <Menu>
        <MenuItem.Button onClick={onClick}>Edit</MenuItem.Button>
        <MenuItem.Button>Delete</MenuItem.Button>
      </Menu>
    </Dropdown>
  );
};

export default DropMenu;
