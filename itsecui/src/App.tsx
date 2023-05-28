import React from "react";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import { IChartData } from "./data/ChartData";
import SideDrawer from "./Dashboard/Drawer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./login";
import MainPage from "./MainPage";

function App() {
  const data: Array<IChartData> = [
    {
      name: "Page B ",
      uv: 3000,
      pv: 2000,
    },

    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 6900,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 200,
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" Component={SignIn}></Route>
        <Route path="/main" Component={MainPage}></Route>
      </Routes>
    </Router>
  );
}

export default App;
