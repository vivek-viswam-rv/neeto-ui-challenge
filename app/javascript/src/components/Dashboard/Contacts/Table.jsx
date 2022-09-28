import React, { useState } from "react";

import { getTimeStamp } from "utils/index";

import Contact from "./Contact";
import Edit from "./Pane/Edit";

const Table = ({
  contacts = [],
  setContacts,
  setSelectedContactId,
  setShowDeleteAlert,
}) => {
  const [showEditContact, setShowEditContact] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});

  const editContact = (id, values) => {
    setContacts(contacts =>
      contacts.map(contact => {
        if (contact.id === id) {
          return { ...values, lastUpdated: getTimeStamp(), isModified: true };
        }

        return contact;
      })
    );
  };

  return (
    <>
      <div className="notes-table-height h-full w-full">
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            deleteClick={() => {
              setSelectedContactId(contact.id);
              setShowDeleteAlert(true);
            }}
            editClick={() => {
              setSelectedContact(contact);
              setShowEditContact(true);
            }}
            {...contact}
          />
        ))}
      </div>
      <Edit
        contact={selectedContact}
        editContact={editContact}
        setShowPane={setShowEditContact}
        showPane={showEditContact}
      />
    </>
  );
};

export default Table;
