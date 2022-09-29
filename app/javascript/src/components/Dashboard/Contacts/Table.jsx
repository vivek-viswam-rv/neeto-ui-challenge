import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";
import { buildRowData, updateContactEntity } from "utils";

import { COLUMN_DATA } from "./constants";
import Edit from "./Pane/Edit";

const Table = ({
  contacts = [],
  setContacts,
  selectedContactIds,
  setSelectedContactIds,
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [showEditPane, setShowEditPane] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});

  const updateContact = (id, values) =>
    setContacts(contacts =>
      contacts.map(contact =>
        contact.id === id ? updateContactEntity({ id, values }) : contact
      )
    );

  const ROW_DATA = buildRowData({
    contacts,
    setShowEditPane,
    setSelectedContact,
  });

  return (
    <div className="notes-table-height h-full w-full">
      <NeetoUITable
        rowSelection
        columnData={COLUMN_DATA}
        currentPageNumber={pageNumber}
        defaultPageSize={8}
        handlePageChange={pageNumber => setPageNumber(pageNumber)}
        rowData={ROW_DATA}
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
