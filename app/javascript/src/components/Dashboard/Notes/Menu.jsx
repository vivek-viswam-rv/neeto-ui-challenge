import React, { useState } from "react";

import { Search, Plus, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

const Menu = ({ showMenu }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <MenuBar showMenu={showMenu} title="Notes">
      <MenuBar.Block active count={13} label="All" />
      <MenuBar.Block count={2} label="Users" />
      <MenuBar.Block count={7} label="Leads" />
      <MenuBar.Block count={4} label="Visitors" />
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
            onClick: () =>
              setIsSearchCollapsed(isSearchCollapsed => !isSearchCollapsed),
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Segments
        </Typography>
      </MenuBar.SubTitle>
      <MenuBar.Search
        collapse={isSearchCollapsed}
        onCollapse={() => setIsSearchCollapsed(true)}
      />
      <MenuBar.Block count={80} label="Europe" />
      <MenuBar.Block count={60} label="Middle-East" />
      <MenuBar.Block count={60} label="Asia" />
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Settings,
          },
          {
            icon: Plus,
          },
          {
            icon: Search,
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Tags
        </Typography>
      </MenuBar.SubTitle>
      <MenuBar.Block count={80} label="Sales" />
      <MenuBar.Block count={60} label="Finance" />
      <MenuBar.Block count={60} label="User Experience" />
    </MenuBar>
  );
};

export default Menu;
