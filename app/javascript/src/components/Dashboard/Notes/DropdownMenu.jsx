import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown } from "neetoui";

const { Menu, MenuItem } = Dropdown;

const DropdownMenu = ({ handleEdit, handleDelete, className = "" }) => (
  <div className={className}>
    <Dropdown customTarget={<MenuVertical size={17} />}>
      <Menu>
        <MenuItem.Button onClick={handleEdit}>Edit</MenuItem.Button>
        <MenuItem.Button style="danger" onClick={handleDelete}>
          Delete
        </MenuItem.Button>
      </Menu>
    </Dropdown>
  </div>
);

export default DropdownMenu;
