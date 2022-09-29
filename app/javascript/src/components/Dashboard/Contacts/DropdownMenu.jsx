import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown } from "neetoui";

const { Menu, MenuItem, Divider } = Dropdown;

const DropdownMenu = ({ handleEdit, handleDelete }) => (
  <Dropdown className="block" customTarget={<MenuVertical />}>
    <Menu>
      <MenuItem.Button onClick={handleEdit}>Edit</MenuItem.Button>
      <Divider />
      <MenuItem.Button style="danger" onClick={handleDelete}>
        Delete
      </MenuItem.Button>
    </Menu>
  </Dropdown>
);
export default DropdownMenu;
