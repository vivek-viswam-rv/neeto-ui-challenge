import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Delete } from "neetoicons";
import { Button, PageLoader } from "neetoui";
import { Container, Header, SubHeader } from "neetoui/layouts";
import { createContactEntity } from "utils";

import EmptyState from "components/Common/EmptyState";
import { CONTACTS } from "components/Dashboard/constants";

import DeleteAlert from "./DeleteAlert";
import Menu from "./Menu";
import Create from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState([]);
  const [selectedContactIds, setSelectedContactIds] = useState([]);

  const createContact = values =>
    setContacts(contacts => [...contacts, createContactEntity(values)]);
  const removeContact = () =>
    setContacts(contacts =>
      contacts.filter(contact => !selectedContactIds.includes(contact.id))
    );

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

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="flex w-full overflow-hidden">
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
          <>
            <SubHeader
              rightActionBlock={
                <Button
                  disabled={!selectedContactIds.length}
                  icon={Delete}
                  label={`Delete (${selectedContactIds.length})`}
                  size="small"
                  onClick={() => setShowDeleteAlert(true)}
                />
              }
            />
            <Table
              contacts={contacts}
              selectedContactIds={selectedContactIds}
              setContacts={setContacts}
              setSelectedContactIds={setSelectedContactIds}
            />
          </>
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
            selectedContactIds={selectedContactIds}
            setSelectedContactIds={setSelectedContactIds}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </div>
  );
};

export default Contacts;
