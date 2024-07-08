import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const MedicalReport = () => {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  const navigate = useNavigate();
  const location = useLocation();
  const { patientId } = location.state;

  const [problem, setProblem] = useState("");
  const [observation, setObservation] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [testType, setTestType] = useState("");
  const [result, setResult] = useState("");
  const [doctorId, setDoctorId] = useState("");
  console.log(token);

  useEffect(() => {
    const fetchDoctor = async () => {
      const token = localStorage.getItem("token");
      console.log(patientId);

      try {
        const response = await axios.get(
          `http://localhost:8080/api/doctor/user/${user?.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const doctor = response.data;
        setDoctorId(doctor?.id);
        console.log(doctor.id);
      } catch (error) {
        console.error("Error fetching doctor:", error);
      }
    };
    fetchDoctor();
  }, [user?.id]);

  const handleSubmit = async () => {
    const payload = {
      problem: problem,
      observation: observation,
      suggestion: suggestion,
      testType: testType,
      result: result,
      patientId: patientId,
      doctorId: doctorId, // Ensure doctorId is properly set in your component state
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/report",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Medical report submitted successfully:", response.data);
      // Optionally, you can handle navigation or display success message here
    } catch (error) {
      console.error("Error submitting medical report:", error);
      // Handle error state or display error message to the user
    }
  };

  return (
    <div>
      <div className="min-h-screen p-8 bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Medical Report</h1>

          <div className="mb-4">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              Problem
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              rows="3"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              Observation
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
              rows="3"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              Doctor's Recommendation
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              rows="3"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              Recommended Tests
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg mb-2"
              value={testType}
              onChange={(e) => setTestType(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              Test's Result
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={result}
              onChange={(e) => setResult(e.target.value)}
              rows="3"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-2 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalReport;
