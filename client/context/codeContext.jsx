import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const codeContext = createContext(null);

export const CodeProvider = ({ children }) => {
  // const [code, setCode] = useState("console.log('Hello World!');");
  const [receiveData, setReceivedData] = useState("");
  const [writtenCode, setWrittenCode] = useState(() => {
    const storedCode = localStorage.getItem("code");
    return storedCode ? storedCode : "";
  });

  const handleApi = async () => {
    const { data } = await axios.post("http://localhost:3001/receiveCode", {
      writtenCode,
    });
    setReceivedData(data);
  };

  const onChange = (value) => {
    // setCode(value);
    console.log("onChange just fired with the value:", value);
    setWrittenCode(value);
  };

  useEffect(() => {
    function sendLocalStorage() {
      if (!writtenCode) {
        return;
      }
      localStorage.setItem("code", writtenCode);
      // setWrittenCode(code);
    }
    sendLocalStorage();
  }, [writtenCode]);

  const value = {
    onChange,
    receiveData,
    setReceivedData,
    handleApi,
    writtenCode,
    setWrittenCode,
  };

  return <codeContext.Provider value={value}>{children}</codeContext.Provider>;
};
