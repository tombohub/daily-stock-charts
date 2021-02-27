import React from "react";
import axios from "axios";
import ChartList from "./components/ChartList";
import StockList from "./components/StockList";
import RegularHoursChart from "./components/RegularHoursChart";

/* ---------------------------------- axios --------------------------------- */
axios.defaults.baseURL = process.env.REACT_APP_API_DOMAIN;

function App() {
  return (
    <>
      <StockList />
      {/* <RegularHoursChart /> */}
    </>
  );
}

export default App;
