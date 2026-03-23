import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useContext } from "react";
import InsideNav from "../insideNavComponents/insideNav";
import { codeContext } from "../../context/codeContext";
import OutPut from "../outPutComponent/outPut";

export default function CodeEditor() {
  const { onChange, writtenCode } = useContext(codeContext);
  //   console.log(code);
  //   const [code, setCode] = useState("console.log('Hello World!');");

  //   const onChange = (value) => {
  //     setCode(value);
  //   };
  return (
    <div className="bg-gray-900">
      <InsideNav />
      <CodeMirror
        className="max-h-117 overflow-auto"
        value={writtenCode}
        height="100hv"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        tabSize={100}
        color={"gray"}
      />
      <OutPut />
    </div>
  );
}
