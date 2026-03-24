import { useContext } from "react";
import { codeContext } from "../../../context/codeContext";
export default function InsideNav() {
  // const {  } = useContext(codeContext);
  // const [code, setCode] = useState("code");

  //   useEffect(
  //     function () {
  //       const controller = new AbortController();
  //       const signal = controller.signal;
  //       const timeOut = setTimeout(async () => {
  //         try {
  //           const { data } = await axios.post(
  //             "http://localhost:3001/receiveCode",
  //             { code },
  //             { signal },
  //           );
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       }, 500);
  //       return () => {
  //         clearTimeout(timeOut);
  //         controller.abort();
  //       };
  //     },
  //     [code],
  //   );
  const { handlExitRoom, handleApi, handleClear } = useContext(codeContext);
  return (
    // Make sure to pull this from your context
    <div className="flex justify-between items-center p-4 bg-gray-800 border-b border-gray-700">
      {/* Run Button - Left Side */}
      <button
        onClick={handleApi}
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg shadow-emerald-900/20 transition-all active:scale-95"
      >
        <span className="text-sm">▶</span>
        Run Code
      </button>

      {/* Right Side Actions */}
      <div className="flex gap-3">
        {/* NEW: Exit Room Button - Warning/Orange Theme */}
        <button
          onClick={handlExitRoom} // This triggers your ternary back to <CodeEditor />
          className="flex items-center gap-2 bg-gray-700 hover:bg-orange-600 text-gray-200 font-medium py-2 px-6 rounded-lg transition-all active:scale-95"
        >
          <span className="text-sm">🚪</span>
          Exit Room
        </button>

        {/* Clear Button - Subtle/Ghost Theme */}
        <button
          onClick={handleClear}
          className="flex items-center gap-2 bg-transparent hover:bg-red-500/10 border border-gray-600 hover:border-red-500 text-gray-300 hover:text-red-500 font-medium py-2 px-6 rounded-lg transition-all active:scale-95"
        >
          <span className="text-sm">🗑</span>
          Clear
        </button>
      </div>
    </div>
  );
}
