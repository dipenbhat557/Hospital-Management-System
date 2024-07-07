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
import CommonSignup from "./pages/auth/CommonSignup";
import CommonSignin from "./pages/auth/CommonSignin";
import PatientSetup from "./pages/auth/PatientSetup";
import DoctorSetup from "./pages/auth/DoctorSetup";
import EmployeeSetup from "./pages/auth/EmployeeSetup";
import { RecoilRoot } from "recoil"
import PaymentPage from "./pages/patient/PaymentPage";

function App() {
  return (
    <div>
      <RecoilRoot>
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
          <Route path="/patient/payment/on" element={<PaymentPage />} />
          <Route path="/patient/profile" element={<PatientProfile />} />
          <Route path="/auth/signup" element={<CommonSignup />} />
          <Route path="/auth/signin" element={<CommonSignin />} />
          <Route path="/auth/patient" element={<PatientSetup />} />
          <Route path="/auth/doctor" element={<DoctorSetup />} />
          <Route path="/auth/employee" element={<EmployeeSetup />} />
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
