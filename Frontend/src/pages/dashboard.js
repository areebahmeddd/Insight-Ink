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
  const { dropdownValue, formattedDate } = location.state;

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false); // Hide loading screen after 3 seconds
    }, 3000);
    // Fetch data using axios inside the effect
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1', {
        //params: { dropdownValue, formattedDate }
      })
      .then((res) => {
        setTableData(res.data);
        console.log(tableData);
        setLoading(false); // Hide loading screen when data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Hide loading screen in case of an error
      });

    // Cleanup function
    return () => {
      clearTimeout(loadingTimeout); // Clear the loading screen timeout if component unmounts
    };
  },[formattedDate,dropdownValue]);


  return isLoading ? (<Loader/>) : (
    <Loader/>
  );
};

export default Dashboard;
