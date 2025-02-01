import { useState } from "react";
import axios from "axios";

const Merger = () => {
  const [files, setFiles] = useState([]);

  const handleMerge = async () => {
    if (files.length < 2) {
      alert("Please select at least two PDFs to merge.");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append("pdfs", file));

    try {
      const response = await axios.post("http://localhost:5000/api/pdf/merge", formData, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "merged.pdf";
      a.click();
    } catch (error) {
      alert("Failed to merge PDFs.");
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-4">Merge PDFs</h2>
      <input
        type="file"
        multiple
        accept="application/pdf"
        className="mb-4 w-full bg-gray-700 p-2 rounded-lg text-white"
        onChange={(e) => setFiles(Array.from(e.target.files))}
      />
      <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition" onClick={handleMerge}>
        Merge PDFs
      </button>
    </div>
  );
};

export default Merger;
