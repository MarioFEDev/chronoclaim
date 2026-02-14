import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Gateway
import Gateway from './pages/Gateway';

// Employer
import CommandCenter from './pages/employer/CommandCenter';
import Roster from './pages/employer/Roster';
import Incidents from './pages/employer/Incidents';
import Premium from './pages/employer/Premium';

// Insurer
import MPCQueue from './pages/insurer/MPCQueue';
import RiskSurface from './pages/insurer/RiskSurface';
import Capital from './pages/insurer/Capital';

// Personnel
import PersonnelHome from './pages/personnel/Home';
import ClaimDetails from './pages/personnel/ClaimDetails';

function App() {
  return (
    <Router>
      <Routes>
        {/* Gateway */}
        <Route path="/" element={<Gateway />} />

        {/* Employer Routes */}
        <Route path="/employer" element={<CommandCenter />} />
        <Route path="/employer/roster" element={<Roster />} />
        <Route path="/employer/incidents" element={<Incidents />} />
        <Route path="/employer/premium" element={<Premium />} />

        {/* Insurer Routes */}
        <Route path="/insurer" element={<MPCQueue />} />
        <Route path="/insurer/risk-surface" element={<RiskSurface />} />
        <Route path="/insurer/capital" element={<Capital />} />

        {/* Personnel Routes */}
        <Route path="/personnel" element={<PersonnelHome />} />
        <Route path="/personnel/claim" element={<ClaimDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
