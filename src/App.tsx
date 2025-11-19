import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage as GuestHomePage } from './pages/HomePage';
import { AboutPage as GuestAboutPage } from './pages/AboutPage';
import { ContactPage as GuestContactPage } from './pages/ContactPage';
import { LoginPage as GuestLoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

export function App() {
  return <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/guest/home" replace />} />

        {/* Guest Routes */}
        <Route path="/guest/home" element={<GuestHomePage />} />
        <Route path="/guest/about" element={<GuestAboutPage />} />
        <Route path="/guest/contact" element={<GuestContactPage />} />
        <Route path="/guest/login" element={<GuestLoginPage />} />
        <Route path="/guest/register/student" element={<RegisterPage />} />
        <Route path="/guest/register/lecturer" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>;
}