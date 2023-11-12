import React from "react";

const EDIT_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M19.071 4.929a10 10 0 1 0 0 14.142 10.011 10.011 0 0 0 0-14.142zm-1.414 12.728a8 8 0 1 1 0-11.314 8.01 8.01 0 0 1 0 11.314z" />
    <path d="M9 10h3.586l-4.293 4.293 1.414 1.414L14 11.414V15h2V8H9v2z" />
  </svg>
);

const styles = {
  select: { margin: "0 20px" },
  buttonsCellContainer: {
    padding: "0 20px",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  editButton: {
    background: "#f3f3f3",
    outline: "none",
    cursor: "pointer",
    padding: 4,
    display: "inline-flex",
    border: "none",
    borderRadius: "50%",
    boxShadow: "1px 1px 2px 0px rgb(0 0 0 / .3)",
  },
  buttonsCellEditorContainer: {
    height: "100%",
    width: "100%",
    display: "inline-flex",
    padding: "0 20px",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cancelButton: {
    background: "#f3f3f3",
    outline: "none",
    cursor: "pointer",
    marginRight: 10,
    padding: 2,
    display: "inline-flex",
    border: "none",
    borderRadius: "50%",
    boxShadow: "1px 1px 2px 0px rgb(0 0 0 / .3)",
  },
  saveButton: {
    background: "#f3f3f3",
    outline: "none",
    cursor: "pointer",
    padding: 2,
    display: "inline-flex",
    border: "none",
    borderRadius: "50%",
    boxShadow: "1px 1px 2px 0px rgb(0 0 0 / .3)",
  },
};

const getColumns = ({ setRowsData }) => {
  return [
    {
      id: "1",
      width: "82px",
      field: "id",
      label: "ID",
    },
    {
      id: "2",
      width: "minmax(190px, 1fr)",
      field: "title",
      label: "Title",
    },
    {
      id: "3",
      visible: false,
      width: "minmax(200px, 1fr)",
      field: "text",
      label: "Content",
    },
    {
      id: "4",
      width: "120px",
      field: "tone",
      label: "Sentiment",
      cellRenderer: ({ value }) => {
        let backgroundColor;

        switch (value) {
          case "Positive":
            backgroundColor = "#4ce94cc9";
            break;
          case "Neutral":
            backgroundColor = "#ffe634c2";
            break;
          case "Negative":
            backgroundColor = "#ff4f4fb8";
            break;
          default:
            backgroundColor = "transparent";
            break;
        }

        return (
          <div
            style={{
              backgroundColor,
              alignItems: "center",
              justifyContent: "center",
              width: "70%",
              height: "70%",
              display: "flex",
              marginLeft: "10px",
              borderRadius: "5px",
            }}
          >
            {value}
          </div>
        );
      },
    },
    {
      id: "5",
      width: "300px",
      field: "government-body",
      label: "Government Body",
    },
    {
      id: "6",
      width: "100px",
      field: "publication_date",
      label: "Date",
    },
    {
      id: "7",
      width: "75px",
      cellRenderer: ({ data }) => (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={styles.editButton}
            onClick={() => {
              const { link } = data;
              if (link) {
                window.open(link, "_blank");
              }
            }}
          >
            {EDIT_SVG}
          </button>
        </div>
      ),
      label: "Link",
    },
  ];
};

export default getColumns;
