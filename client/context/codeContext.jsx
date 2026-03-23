import axios from "axios";
import { createContext, useState } from "react";

export const codeContext = createContext();

export const CodeProvider = ({ children }) => {
  const [code, setCode] = useState("console.log('Hello World!');");
  const [receiveData, setReceivedData] = useState("");

  const handleApi = async () => {
    const { data } = await axios.post("http://localhost:3001/receiveCode", {
      code,
    });
    setReceivedData(data);
  };

  const onChange = (value) => {
    setCode(value);
  };

  const value = {
    code,
    setCode,
    onChange,
    receiveData,
    setReceivedData,
    handleApi,
  };

  return <codeContext.Provider value={value}>{children}</codeContext.Provider>;
};
