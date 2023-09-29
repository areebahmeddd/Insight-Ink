import React, { useState, useEffect } from "react";
import GridTable from "@nadavshaar/react-grid-table";
import data from "../data.json";
import getColumns from "./getColumns.js";
import "./tablestyles.css";

const SyncTable = () => {
  const [rowsData, setRowsData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setRowsData(data);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">
      <GridTable
        columns={getColumns({ setRowsData })}
        rows={rowsData}
        pageSize={10}
        pageSizes={[5, 10, 20]}
        isLoading={isLoading}
        onRowClick={({ rowIndex, data, column, isEdit, event }, tableManager) =>
          !isEdit &&
          tableManager.rowSelectionApi.getIsRowSelectable(data.id) &&
          tableManager.rowSelectionApi.toggleRowSelection(data.id)
        }
      />
    </div>
  );
};

export default SyncTable;
