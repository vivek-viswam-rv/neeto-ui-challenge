import React, { useState } from "react";

import { Table as FormikTable } from "neetoui";
import { buildRowData } from "utils";

import { COLUMN_DATA } from "./constants";
import Edit from "./Pane/Edit";

const Table = ({
  contacts = [],
  setContacts,
  selectedContactIds,
  setSelectedContactIds,
}) => {
  const [pageNo, setPageNo] = useState(1);
  const [showEditPane, setShowEditPane] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});

  const updateContact = (id, values) => {
    setContacts(contacts =>
      contacts.map(contact => (contact.id === id ? { ...values, id } : contact))
    );
  };

  const ROW_DATA = buildRowData(contacts, setShowEditPane, setSelectedContact);

  return (
    <div className="notes-table-height h-full w-full">
      <FormikTable
        rowSelection
        columnData={COLUMN_DATA}
        currentPageNumber={pageNo}
        defaultPageSize={8}
        handlePageChange={pageNo => setPageNo(pageNo)}
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
