// src/routes/index.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from '@/components/Test';
import LandingPage from '@/pages/landingPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<>Not Found</>} /> {/* Fallback for unknown routes */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
