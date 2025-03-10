// src/routes/index.tsx
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import LandingPage from '@/pages/landingPage';
import LoginPage from '@/pages/auth/login';
import RegisterPage from '@/pages/auth/register';
import ProfilePage from '@/pages/profile';
import PrivateRoute from './PrivateRoute';
import ProfileForm from '@/pages/profile/form';
import DashboardPage from '@/pages/dashboard';
import OtherPersonProfile from '@/pages/profile/test';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="auth" element={<Outlet />} >
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
        </Route>
        <Route path='portal' element={<PrivateRoute />}>
          <Route path='profile' element={<Outlet />} >
            <Route path='' element={<ProfilePage />} />
            <Route path='add' element={<ProfileForm />} />
          </Route>
          <Route path='dashboard' element={<DashboardPage/>} />
          <Route path='user-profile/:id' element={<OtherPersonProfile/>} />
        </Route>
        <Route path="*" element={<>Not Found</>} /> {/* Fallback for unknown routes */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
