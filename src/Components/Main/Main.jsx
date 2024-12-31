import React from "react";
import Menu from "../Menu/Menu";
import Dashboard from "../../pages/Dashboard/Dashboard";
import "./Main.css";
import { BrowserRouter, Routes, Route } from "react-router";
import ProductivityTracker from "../../pages/ProductivityTracker/ProductivityTracker";
import GoalTracker from "../../pages/GoalTracker/GoalTracker";

const Main = () => {
  return (
    <div className="main_container">
      <Menu />
      
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/productivity-tracker" element={<ProductivityTracker />} />
          <Route path="/goal-tracker" element={<GoalTracker/>} />
        </Routes>
    </div>
  );
};

export default Main;
