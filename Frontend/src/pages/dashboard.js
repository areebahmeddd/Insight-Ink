import React, { useEffect, useState } from "react";
import ClickOutside from "react-click-outside";
import "font-awesome/css/font-awesome.min.css";
import styled from "styled-components";
import "./dashboard.css";
import TableTable from "../components/table";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "components/loader/Loader";
const StyledSideNav = styled(SideNav)`
  background-color: #111547;
`;
StyledSideNav.defaultProps = SideNav.defaultProps;

// Dashboard component
const Dashboard = () => {
  const [expanded, setExpanded] = useState(false);

  const location = useLocation();
  const [tableData, setTableData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const { dropdownValue, formattedDate } = location.state;
    setLoading(true);

    setTimeout(() => {
      setLoading(true);
    }, 1500);

    //later replace this with the domain name
    /**
    axios
      .get('http://localhost:5000/', 
      { dropdownValue, formattedDate }
      )
      .then((res) => {
        setTableData(res.data);
        console.log(tableData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
      */
  }, [location.state]);

  return isLoading ? (<Loader/>) : (
    /**
    <div className="dashboard-container">
      <StyledSideNav
        onSelect={(selected) => {
          // Code for updating the selected state when a navigation item is clicked
        }}
        className={expanded ? "navbar expanded" : "navbar"}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Charts</NavText>
          </NavItem>
          <NavItem eventKey="contact">
            <NavIcon>
              <i
                className="fa fa-fw fa-envelope"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>Contact us</NavText>
          </NavItem>
          <NavItem eventKey="settings">
            <NavIcon>
              <i className="fa fa-fw fa-cog" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Settings</NavText>
          </NavItem>
        </SideNav.Nav>
      </StyledSideNav>

      <ClickOutside
        onClickOutside={() => {
          setExpanded(false); // Update the expanded state here
        }}
      >
        <StyledSideNav
          expanded={expanded}
          onToggle={(expanded) => {
            setExpanded(expanded); // Update the expanded state here
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <i
                  className="fa fa-fw fa-home"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="charts">
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Charts</NavText>
            </NavItem>
            <NavItem eventKey="contact">
              <NavIcon>
                <i
                  className="fa fa-fw fa-envelope"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Contact us</NavText>
            </NavItem>
            <NavItem eventKey="settings">
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
          <h1>Article Dashboard</h1>
          <TableTable /> 
        </section>
      </section>
    </div>*/
    <Loader/>
  );
};

export default Dashboard;