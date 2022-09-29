import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { COLUMN_DATA } from "./constants";
import Edit from "./Pane/Edit";
import { buildRowData, updateContact } from "./utils";

const Table = ({
  contacts = [],
  setContacts,
  selectedContactIds,
  setSelectedContactIds,
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [showEditPane, setShowEditPane] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});

  return (
    <div className="notes-table-height h-full w-full">
      <NeetoUITable
        rowSelection
        columnData={COLUMN_DATA}
        currentPageNumber={pageNumber}
        defaultPageSize={8}
        handlePageChange={pageNumber => setPageNumber(pageNumber)}
        selectedRowKeys={selectedContactIds}
        rowData={buildRowData({
          contacts,
          setShowEditPane,
          setSelectedContact,
        })}
        onRowSelect={selectedRowKeys => setSelectedContactIds(selectedRowKeys)}
      />
      <Edit
        contact={selectedContact}
        setShowEditPane={setShowEditPane}
        showEditPane={showEditPane}
        updateContact={({ id, values }) =>
          updateContact({ id, values, setContacts })
        }
      />
    </div>
  );
};

export default Table;
