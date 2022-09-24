import React, { useState } from "react";

import { Route, Redirect, Switch } from "react-router-dom";

import { DUMMY_CONTACTS, DUMMY_NOTES, TAGS, ROLES } from "common/dummy";
import Sidebar from "components/Common/Sidebar";
import {
  DASHBOARD_ROUTES,
  NOTES_PATH,
  DASHBOARD_PATH,
} from "components/routeConstants";

const DashboardContext = React.createContext("dashboard");

const Dashboard = () => {
  const [notes, setNotes] = useState(DUMMY_NOTES);
  const [contacts, setContacts] = useState(DUMMY_CONTACTS);
  const [tags, setTags] = useState(TAGS);
  const [roles, setRoles] = useState(ROLES);

  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <Switch>
        <DashboardContext.Provider
          value={{
            notes,
            contacts,
            tags,
            roles,
            setNotes,
            setContacts,
            setTags,
            setRoles,
          }}
        >
          {DASHBOARD_ROUTES.map(({ path, component }) => (
            <Route exact component={component} key={path} path={path} />
          ))}
          <Redirect from={DASHBOARD_PATH} to={NOTES_PATH} />
        </DashboardContext.Provider>
      </Switch>
    </div>
  );
};

export { Dashboard as default, DashboardContext };
