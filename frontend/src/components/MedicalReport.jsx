import React, { useState } from "react";

const MedicalReport = () => {
  const [symptoms, setSymptoms] = useState("");
  const [observations, setObservations] = useState("");
  const [tests, setTests] = useState("");
  const [testResults, setTestResults] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleTestResultsUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleRemoveFile = (fileIndex) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(fileIndex, 1);
    setUploadedFiles(updatedFiles);
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to backend
    console.log("Symptoms:", symptoms);
    console.log("Observations:", observations);
    console.log("Suggested Tests:", tests);
    console.log("Test Results:", testResults);
    console.log("Uploaded Files:", uploadedFiles);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Medical Report</h1>

        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-gray-700">
            Symptoms
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            rows="3"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-gray-700">
            Observations
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
            rows="3"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-gray-700">
            Suggested Tests
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={tests}
            onChange={(e) => setTests(e.target.value)}
            rows="3"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-gray-700">
            Upload Test Results
          </label>
          <input
            type="file"
            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
            onChange={handleTestResultsUpload}
            multiple
          />
          <div>
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center mb-2">
                <span className="text-gray-700">{file.name}</span>
                <button
                  className="ml-2 text-sm text-red-600 hover:text-red-800 focus:outline-none"
                  onClick={() => handleRemoveFile(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-2 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MedicalReport;
