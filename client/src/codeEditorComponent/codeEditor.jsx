import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useContext } from "react";
import InsideNav from "../insideNavComponents/insideNav";
import { codeContext } from "../../context/codeContext";

export default function CodeEditor() {
  const { code, setCode, onChange } = useContext(codeContext);
  //   console.log(code);
  //   const [code, setCode] = useState("console.log('Hello World!');");

  //   const onChange = (value) => {
  //     setCode(value);
  //   };
  return (
    <>
      <InsideNav />
      <CodeMirror
        value={code}
        height="100hv"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </>
  );
}
