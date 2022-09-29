import React, { useState } from "react";

import { Table as FormikTable } from "neetoui";

import { buildRowData } from "utils/index";

import { TABLE_COLUMN_DATA } from "./constants";
import Edit from "./Pane/Edit";

const Table = ({
  contacts = [],
  setContacts,
  selectedContactIds,
  setSelectedContactIds,
}) => {
  const [page, setPage] = useState(1);
  const [showEditPane, setShowEditPane] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});

  const updateContact = (id, values) => {
    setContacts(contacts =>
      contacts.map(contact => (contact.id === id ? { ...values, id } : contact))
    );
  };

  const TABLE_ROW_DATA = buildRowData(
    contacts,
    setShowEditPane,
    setSelectedContact
  );

  return (
    <div className="notes-table-height h-full w-full">
      <FormikTable
        rowSelection
        columnData={TABLE_COLUMN_DATA}
        currentPageNumber={page}
        defaultPageSize={8}
        handlePageChange={page => setPage(page)}
        rowData={TABLE_ROW_DATA}
        selectedRowKeys={selectedContactIds}
        onRowSelect={selectedRowKeys => setSelectedContactIds(selectedRowKeys)}
      />
      <Edit
        contact={selectedContact}
        setShowEditPane={setShowEditPane}
        showEditPane={showEditPane}
        updateContact={updateContact}
      />
    </div>
  );
};

export default Table;
