import React, { useEffect, useState } from "react";
import ClickOutside from "react-click-outside";
import "font-awesome/css/font-awesome.min.css";
import styled from "styled-components";
import "./dashboard.css";
import SyncTable from "../components/table";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useLocation } from "react-router-dom";
import Charts from "components/charts/Charts";
import chartpic from "../sentiment_distribution.png";

const StyledSideNav = styled(SideNav)`
  background-color: #242424;
  z-index: 1000;
  position: fixed;
`;
StyledSideNav.defaultProps = SideNav.defaultProps;

const Dashboard = () => {
  const [expanded, setExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState("tables");
  const location = useLocation();
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    const { tableData } = location.state;

    setTableData(tableData);
  }, [location.state]);

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case "home":
        return <div style={{ color: "#000" }}>Home</div>;
      case "info":
        return <div style={{ color: "#000" }}>Info</div>;
      case "tables":
        return <SyncTable data={tableData} />;
      case "charts":
        return (
          <div style={{ color: "#000" }}>
            <Charts chartspic={chartpic} />
          </div>
        );
      case "settings":
        return <div style={{ color: "#000" }}>Settings</div>;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <ClickOutside
        onClickOutside={() => {
          setExpanded(false);
        }}
      >
        <StyledSideNav
          expanded={expanded}
          onToggle={(expanded) => {
            setExpanded(expanded);
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="tables">
            <NavItem
              eventKey="home"
              onClick={() => {
                window.open("../", "_self");
              }}
            >
              <NavIcon>
                <i
                  className="fa fa-fw fa-home"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem
              eventKey="info"
              onClick={() => {
                handlePageChange("info");
              }}
            >
              <NavIcon>
                <i
                  className="fa fa-info-circle"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Info</NavText>
            </NavItem>
            <NavItem
              eventKey="tables"
              onClick={() => {
                handlePageChange("tables");
              }}
            >
              <NavIcon>
                <i className="fa fa-table" style={{ fontSize: "1.75em" }} />
              </NavIcon>
              <NavText>Tables</NavText>
            </NavItem>
            <NavItem
              eventKey="charts"
              onClick={() => {
                handlePageChange("charts");
              }}
            >
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Charts</NavText>
            </NavItem>
            <NavItem
              eventKey="contact"
              onClick={() => {
                handlePageChange("contact");
              }}
            >
              <NavIcon>
                <i
                  className="fa fa-fw fa-envelope"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Contact</NavText>
            </NavItem>
            <NavItem
              eventKey="settings"
              onClick={() => {
                handlePageChange("settings");
              }}
            >
              <NavIcon>
                <i className="fa fa-fw fa-cog" style={{ fontSize: "1.75em" }} />
              </NavIcon>
              <NavText>Settings</NavText>
            </NavItem>
          </SideNav.Nav>
        </StyledSideNav>
      </ClickOutside>

      <section className={`section ${expanded ? "pushed" : ""}`}>
        <section className="section-content">
          <div className="titleCenter">Dashboard</div>
          <style jsx="true">
            {`
              .titleCenter {
                color: #000;
                text-align: center;
                font-size: 26px;
                font-weight: semibold;
                margin-bottom: 10px;
                border-bottom: 2px solid #242424;
              }
            `}
          </style>
          {renderPageContent()}
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
