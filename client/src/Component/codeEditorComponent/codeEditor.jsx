import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useContext } from "react";
import InsideNav from "../insideNavComponents/insideNav";
import { codeContext } from "../../../context/codeContext";
import OutPut from "../outPutComponent/outPut";

export default function CodeEditor() {
  const { onChange, sendingData, editorExtensions } = useContext(codeContext);
  //   console.log(code);
  //   const [code, setCode] = useState("console.log('Hello World!');");

  //   const onChange = (value) => {
  //     setCode(value);
  //   };
  return (
    <div className="flex flex-col h-screen bg-[#0d1117] text-white overflow-hidden">
      {/* 1. Top Navigation */}
      <div className="border-b border-gray-800 shadow-md">
        <InsideNav />
      </div>

      {/* 2. Main Workspace (Editor + Output) */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Side: The Code Editor */}
        <div className="flex-1 border-r border-gray-800 bg-[#161b22] overflow-auto custom-scrollbar">
          <CodeMirror
            className="text-lg"
            value={sendingData}
            height="100%" // Use 100% of the parent container
            theme="dark" // Usually provided by a CodeMirror extension
            extensions={editorExtensions}
            onChange={onChange}
            basicSetup={{
              lineNumbers: true,
              foldGutter: true,
            }}
          />
        </div>
      </div>
      <OutPut />
    </div>
  );
}
