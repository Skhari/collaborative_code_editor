import React, { useContext } from "react";
import { codeContext } from "../../../context/codeContext";

function OutPut() {
  const { receiveData } = useContext(codeContext);
  return (
    <div className="fixed bottom-0 left-0 w-full h-48 bg-[#0d1117] border-t border-gray-700 flex shadow-2xl">
      {/* Input Section */}
      <div className="w-1/2 flex flex-col border-r border-gray-800">
        <div className="bg-gray-800 px-4 py-1 text-xs font-mono text-gray-400 flex items-center gap-2">
          <span className="text-blue-400">📥</span> User Input
        </div>
        <textarea
          className="flex-1 bg-[#0d1117] text-gray-300 p-3 font-mono text-sm outline-none resize-none focus:bg-[#161b22] transition-colors"
          placeholder="Type input here (e.g. for stdin)..."
        />
      </div>

      {/* Output Section */}
      <div className="w-1/2 flex flex-col">
        <div className="bg-gray-800 px-4 py-1 text-xs font-mono text-gray-400 flex items-center gap-2">
          <span className="text-emerald-400">📤</span> Output Terminal
        </div>
        <textarea
          readOnly
          className="flex-1 bg-black text-emerald-500 p-3 font-mono text-sm outline-none resize-none cursor-default"
          placeholder="Results will appear here..."
          value={receiveData}
        />
      </div>
    </div>
  );
}

export default OutPut;
