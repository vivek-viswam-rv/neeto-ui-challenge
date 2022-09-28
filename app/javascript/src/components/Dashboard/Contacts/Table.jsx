import React, { useState } from "react";

import { Table as FormikTable } from "neetoui";

import { buildRowData } from "utils/index";

import { TABLE_COLUMN_DATA } from "./constants";

const Table = ({ contacts = [] }) => {
  const [page, setPage] = useState(1);
  const TABLE_ROW_DATA = buildRowData(contacts);

  return (
    <div className="notes-table-height h-full w-full">
      <FormikTable
        columnData={TABLE_COLUMN_DATA}
        currentPageNumber={page}
        defaultPageSize={10}
        handlePageChange={page => setPage(page)}
        rowData={TABLE_ROW_DATA}
      />
    </div>
  );
};

export default Table;
