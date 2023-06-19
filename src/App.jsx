import { HashRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./screens/admin/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import Analytics from "./screens/admin/Analytics";
import Reports from "./screens/admin/Reports";
import Settings from "./screens/admin/Settings";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </HashRouter>
      <Dashboard />
    </>
  );
};

export default App;
