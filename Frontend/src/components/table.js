import React, { useState, useEffect } from "react";
import GridTable from "@nadavshaar/react-grid-table";
import getColumns from "./getColumns.js";
import "./tablestyles.css";

const PageSize = ({
  tableManager,
  value = tableManager.paginationApi.pageSize,
  onChange = tableManager.paginationApi.setPageSize,
  options = tableManager.config.pageSizes,
}) => {
  const {
    config: {
      texts: { rowsPerPage: rowsPerPageText },
      additionalProps: { pageSize: additionalProps = {} },
    },
  } = tableManager;

  let classNames = (
    "rgt-footer-page-size " + (additionalProps.className || "")
  ).trim();

  return (
    <div className={classNames}>
      
    </div>
  );
}
const Search = ({
  tableManager,
  value = tableManager.searchApi.searchText,
  onChange = tableManager.searchApi.setSearchText,
  labelText = "Search", // Set the default label text to "Find"
}) => {
  const {
    config: {
      texts: { search: searchText },
      icons: { search: searchIcon },
      additionalProps: { search: additionalProps = {} },
    },
  } = tableManager;

  let classNames = (
    "rgt-search-container " + (additionalProps.className || "")
  ).trim();

  return (
    <div {...additionalProps} className={classNames}>
      <label htmlFor="rgt-search" className="rgt-search-label" style={{justifyContent:"center",marginTop:"4px",marginBottom:"2px",userSelect:"none"}}>
        <span className="rgt-search-icon">{searchIcon}</span>
        {labelText} {/* Use the custom labelText prop here */}
      </label>
      <input
        name="rgt-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rgt-search-input"
        style={{background:"#f0f0f0",border:"0.1px solid #d5d0d0",borderRadius:"5px",paddingLeft:"10px"}}
      />
    </div>
  );
};
const Header = ({ tableManager }) => {
  const {
    config: {
        showColumnVisibilityManager,
        components: { ColumnVisibility, Search },
        additionalProps: { header: additionalProps = {} },
        showSearch,
    },
    columnsApi: { columns },
    columnsVisibilityApi: { toggleColumnVisibility },
    searchApi: { setSearchText, searchText },
} = tableManager;

const classNames = (
    "rgt-header-container " + (additionalProps.className || "")
).trim();

return (
    <div {...additionalProps} className={classNames}>
        {showSearch !== false ? (
            <Search
                value={searchText}
                onChange={setSearchText}
                tableManager={tableManager}
            />
        ) : (
            <span></span>
        )}
        {showColumnVisibilityManager !== false ? (
            <ColumnVisibility
                columns={columns}
                onChange={toggleColumnVisibility}
                tableManager={tableManager}
            />
        ) : (
            <span></span>
        )}
    </div>
);
};

const SyncTable = ({ data }) => {
  const [rowsData, setRowsData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (data && data.length > 0) {
      setRowsData(data);
      setLoading(false);
    }
  }, [data]);

  return (
    <div className="App" style={{color:"#000"}}>
      <GridTable
        columns={getColumns({ setRowsData })}
        rows={rowsData}
        enableColumnsReorder={false}
        pageSize={10}
        pageSizes={[5, 10, 20]}
        showRowsInformation={false}
        isLoading={isLoading}
        onRowClick={({ rowIndex, data, column, isEdit, event }, tableManager) =>
          !isEdit &&
          tableManager.rowSelectionApi.getIsRowSelectable(data.id) &&
          tableManager.rowSelectionApi.toggleRowSelection(data.id)
        }
        components={{ Header, PageSize,Search }}
      />
    </div>
  );
};

export default SyncTable;