import { useState } from "react";
import Splitter from "./components/Splitter";
import Merger from "./components/Merger";

function App() {
  const [view, setView] = useState("split");

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">PDF Splitter & Merger</h1>

      <div className="flex space-x-4 mb-6">
        <button
          className={`px-6 py-2 rounded-lg transition ${
            view === "split" ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setView("split")}
        >
          Split PDF
        </button>
        <button
          className={`px-6 py-2 rounded-lg transition ${
            view === "merge" ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setView("merge")}
        >
          Merge PDFs
        </button>
      </div>

      <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
        {view === "split" ? <Splitter /> : <Merger />}
      </div>
    </div>
  );
}

export default App;
