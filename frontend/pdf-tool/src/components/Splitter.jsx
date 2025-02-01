import { useState } from "react";
import axios from "axios";

const Splitter = () => {
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState("");

  const handleSplit = async () => {
    if (!file || !pages) {
      alert("Please select a file and specify pages.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("pages", pages.split(",").map(Number));

    try {
      const response = await axios.post("http://localhost:5000/api/pdf/split", formData, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "split.pdf";
      a.click();
    } catch (error) {
      alert("Failed to split PDF.");
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-4">Split PDF</h2>
      <input
        type="file"
        accept="application/pdf"
        className="mb-4 w-full bg-gray-700 p-2 rounded-lg text-white"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <input
        type="text"
        placeholder="Enter pages (e.g., 1,3,5)"
        className="w-full p-2 rounded-lg bg-gray-700 text-white mb-4"
        value={pages}
        onChange={(e) => setPages(e.target.value)}
      />
      <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition" onClick={handleSplit}>
        Split PDF
      </button>
    </div>
  );
};

export default Splitter;
