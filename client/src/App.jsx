import "./index.css";
import CodeEditor from "./codeEditorComponent/codeEditor";
import MonacoCodeEditor from "./codeEditorComponent/monacoCodeEditor";
import { CodeProvider } from "../context/codeContext";
function App() {
  return (
    <>
      <CodeProvider>
        <CodeEditor />
        {/* <MonacoCodeEditor /> */}
      </CodeProvider>
    </>
  );
}

export default App;
