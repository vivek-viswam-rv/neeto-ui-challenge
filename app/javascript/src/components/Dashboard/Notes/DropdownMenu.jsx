import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown } from "neetoui";

const { Menu, MenuItem } = Dropdown;

const DropdownMenu = ({ handleEdit }) => (
  <Dropdown customTarget={<MenuVertical size={17} />}>
    <Menu>
      <MenuItem.Button onClick={handleEdit}>Edit</MenuItem.Button>
      <MenuItem.Button style="danger">Delete</MenuItem.Button>
    </Menu>
  </Dropdown>
);

export default DropdownMenu;
