import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";
import { getTimeStamp } from "utils/index";

import DeleteAlert from "./DeleteAlert";
import Menu from "./Menu";
import Create from "./Pane/Create";
import Table from "./Table";

import { CONTACTS } from "../constants";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContactId, setSelectedContactId] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    try {
      setLoading(true);
      setContacts(CONTACTS);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const createContact = values =>
    setContacts(contacts => [
      ...contacts,
      { ...values, lastUpdated: getTimeStamp(), isModified: false },
    ]);

  const removeContact = () =>
    setContacts(contacts =>
      contacts.filter(contacts => contacts.id !== selectedContactId)
    );

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="flex w-full">
      <Menu showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(showMenu => !showMenu)}
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Contact"
              size="small"
              onClick={() => setShowNewContactPane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number, Etc",
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {contacts.length ? (
          <Table
            contacts={contacts}
            setContacts={setContacts}
            setSelectedContactId={setSelectedContactId}
            setShowDeleteAlert={setShowDeleteAlert}
          />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => setShowNewContactPane(true)}
            primaryActionLabel="Add Contact"
            subtitle="Add your contacts to send customized emails to them."
            title="Looks like you don't have any contacts!"
          />
        )}
        <Create
          createContact={createContact}
          setShowPane={setShowNewContactPane}
          showPane={showNewContactPane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            removeContact={removeContact}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </div>
  );
};

export default Contacts;
