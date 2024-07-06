import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/doctor/Mainpage";
import Consultations from "./pages/doctor/Consultations";
import ProfilePage from "./pages/doctor/ProfilePage";
import Common from "./components/Common";
import CreateMedicalReport from "./pages/doctor/CreateMedicalReport";
import PatientMainPage from "./pages/patient/PatientMainPage";
import PatientMedicalHistory from "./pages/patient/PatientMedicalHistory";
import PatientPaymentHistory from "./pages/patient/PatientPaymentHistory";
import PatientProfile from "./pages/patient/PatientProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Common />} />
          <Route path="/doctor" element={<Mainpage />} />
          <Route path="/doctor/consultations" element={<Consultations />} />
          <Route path="/doctor/profile" element={<ProfilePage />} />
          <Route path="/doctor/new" element={<CreateMedicalReport />} />
          <Route path="/patient" element={<PatientMedicalHistory />} />
          <Route path="/patient/history" element={<PatientMedicalHistory />} />
          <Route path="/patient/new" element={<PatientMainPage />} />

          <Route path="/patient/payment" element={<PatientPaymentHistory />} />
          <Route path="/patient/profile" element={<PatientProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
