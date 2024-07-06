import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/doctor/Mainpage";
import Consultations from "./pages/doctor/Consultations";
import ProfilePage from "./pages/doctor/ProfilePage";
import Common from "./components/Common";
import CreateMedicalReport from "./pages/doctor/CreateMedicalReport";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
