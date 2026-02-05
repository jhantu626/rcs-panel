import React from "react";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <DashboardLayout>
      {/* <Dashboard /> */}
      <Outlet />
      <ToastContainer />
    </DashboardLayout>
  );
}

export default App;
