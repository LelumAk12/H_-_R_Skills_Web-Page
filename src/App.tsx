import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage as GuestHomePage } from './pages/HomePage';
import { AboutPage as GuestAboutPage } from './pages/AboutPage';
import { ContactPage as GuestContactPage } from './pages/ContactPage';
import { StudentRegisterPage } from './pages/StudentRegisterPage';
import { LecturerRegisterPage } from './pages/LecturerRegisterPage';

export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/guest/home" replace />} />

        {/* Guest Routes */}
        <Route path="/guest/home" element={<GuestHomePage />} />
        <Route path="/guest/about" element={<GuestAboutPage />} />
        <Route path="/guest/contact" element={<GuestContactPage />} />
        <Route path="/guest/register/student" element={<StudentRegisterPage />} />
        <Route path="/guest/register/lecturer" element={<LecturerRegisterPage />} />

       
      </Routes>
    </BrowserRouter>;
}