// src/routes/index.tsx
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import LandingPage from '@/pages/landingPage';
import LoginPage from '@/pages/auth/login';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="auth" element={<Outlet />} >
          <Route path='login' element={<LoginPage />} />
        </Route>
        <Route path="*" element={<>Not Found</>} /> {/* Fallback for unknown routes */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
