import "./index.css";
import { CodeProvider } from "../context/codeContext";
import EntryPage from "./Component/MainComponent/EntryPage";
function App() {
  return (
    <>
      <CodeProvider>
        <EntryPage />
      </CodeProvider>
    </>
  );
}

export default App;
