import React from "react";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import { Outlet } from "react-router";

function App() {
  return (
    <DashboardLayout>
      {/* <Dashboard /> */}
      <Outlet />
    </DashboardLayout>
  );
}

export default App;
