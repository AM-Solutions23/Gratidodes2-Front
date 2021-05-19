import React, { Fragment, createContext, useReducer } from "react";
import AdminLayout from "../layout";
import DashboardCard from "./DashboardCard";
import Customize from "./Customize";
import { dashboardState, dashboardReducer } from "./DashboardContext";
import TodaySell from "./TodaySell";

export const DashboardContext = createContext();

const DashboardComponent = () => {
  return (
    <Fragment>
      <TodaySell />
      <DashboardCard />
      <Customize />
      
    </Fragment>
  );
};

const DashboardAdmin = (props) => {
  const [data, dispatch] = useReducer(dashboardReducer, dashboardState);
  return (
    <Fragment>
      <DashboardContext.Provider value={{ data, dispatch }}>
        <AdminLayout children={<DashboardComponent />} />
      </DashboardContext.Provider>
    </Fragment>
  );
};

export default DashboardAdmin;
