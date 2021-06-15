import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";

function Homebox() {
  return (
    <Router>
      <Dashboard notifications={[1, 2]} title="Dashboard" />
    </Router>
  );
}

export default Homebox;
