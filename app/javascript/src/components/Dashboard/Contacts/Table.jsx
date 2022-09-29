import React, { useState } from "react";

import { Table as FormikTable } from "neetoui";

import { buildRowData } from "utils/index";

import { TABLE_COLUMN_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Edit from "./Pane/Edit";

const Table = ({ contacts = [], setContacts }) => {
  const [page, setPage] = useState(1);
  const [showEditPane, setShowEditPane] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const updateContact = (id, values) => {
    setContacts(contacts =>
      contacts.map(contact => (contact.id === id ? { ...values, id } : contact))
    );
  };

  const removeContact = () =>
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== selectedContact.id)
    );

  const TABLE_ROW_DATA = buildRowData(
    contacts,
    setShowEditPane,
    setSelectedContact,
    setShowDeleteAlert
  );

  return (
    <div className="notes-table-height h-full w-full">
      <FormikTable
        columnData={TABLE_COLUMN_DATA}
        currentPageNumber={page}
        defaultPageSize={8}
        handlePageChange={page => setPage(page)}
        rowData={TABLE_ROW_DATA}
      />
      <Edit
        contact={selectedContact}
        setShowEditPane={setShowEditPane}
        showEditPane={showEditPane}
        updateContact={updateContact}
      />
      {showDeleteAlert && (
        <DeleteAlert
          removeContact={removeContact}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </div>
  );
};

export default Table;
