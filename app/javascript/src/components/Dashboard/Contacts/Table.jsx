import React from "react";

import { Table as FormikTable } from "neetoui";

import { buildRowData } from "utils/index";

import { TABLE_COLUMN_DATA } from "./constants";

const Table = ({ contacts = [] }) => {
  const TABLE_ROW_DATA = buildRowData(contacts);

  return (
    <div className="notes-table-height h-full w-full">
      <FormikTable
        rowSelection
        className="v-screen"
        columnData={TABLE_COLUMN_DATA}
        currentPageNumber={1}
        defaultPageSize={10}
        handlePageChange={function noRefCheck() {}}
        rowData={TABLE_ROW_DATA}
      />
    </div>
  );
};

export default Table;
