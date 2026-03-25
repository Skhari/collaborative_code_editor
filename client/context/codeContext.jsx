import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import { javascript } from "@codemirror/lang-javascript";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { yCollab } from "y-codemirror.next";
import { CodemirrorBinding } from "y-codemirror";

export const codeContext = createContext(null);

export const CodeProvider = ({ children }) => {
  const [code, setCode] = useState("console.log('Hello World!');");
  const [receiveData, setReceivedData] = useState("");
  const [editorExtensions, setEditorExtensions] = useState([
    javascript({ jsx: true }),
  ]);
  const [roomId, setRoomId] = useState("");
  const [openEdit, setOpenEdit] = useState(() => {
    const canOpenEdit = localStorage.getItem("openEdit");
    return canOpenEdit ? JSON.parse(canOpenEdit) : false;
  });
  const writtenCodeRef = useRef(null);
  // const sendingData = writtenCodeRef.current;
  // const [writtenCode, setWrittenCode] = useState(() => {
  //   const storedCode = localStorage.getItem("code");
  //   return storedCode ? storedCode : "";
  // });
  // const writtenCode = "console.log()";

  const handleApi = async () => {
    setReceivedData("Loading.....");
    const { data } = await axios.post("http://localhost:3001/receiveCode", {
      code,
    });

    // console.log(data.data.output);

    if (data.data.error) {
      setReceivedData(data.data.error);
    }
    if (data.data.output) {
      setReceivedData(data.data.output);
    }
    // setReceivedData(data);
  };

  const onChange = (value) => {
    // setCode(value);
    // console.log("onChange just fired with the value:", value);
    // setWrittenCode(value);
    writtenCodeRef.current = value;
    // console.log(writtenCodeRef.current);
    setCode(value);
  };

  const ydocRef = useRef(null);
  const providerRef = useRef(null);

  const signalingServerUrl =
    import.meta.env.VITE_MODE === "production"
      ? "wss://yjs-server-production-984b.up.railway.app"
      : "ws://localhost:4444";

  const handleJoinRoom = (roomId) => {
    console.log("Joining room:", roomId);
    if (providerRef.current) {
      providerRef.current.destroy();
    }
    if (ydocRef.current) {
      ydocRef.current.destroy();
    }

    // if (writtenCode.current) {
    //   writtenCode.current.destroy();
    // }

    ydocRef.current = new Y.Doc();

    // THE FIX: Delete the broken public servers and use your private one
    providerRef.current = new WebrtcProvider(roomId, ydocRef.current, {
      signaling: [signalingServerUrl],
    });

    const ytext = ydocRef.current.getText("program");

    setEditorExtensions([
      javascript({ jsx: true }),
      yCollab(ytext, providerRef.current.awareness),
    ]);

    setOpenEdit(false);
  };

  const handleClear = () => {
    setCode("");
    setReceivedData("");
    if (writtenCodeRef.current) {
      writtenCodeRef.current.destroy();
    }
  };

  const handlExitRoom = () => {
    // ydocRef.current.destroy();
    // providerRef.current.destroy();
    setOpenEdit(true);
  };

  useEffect(() => {
    localStorage.setItem("openEdit", JSON.stringify(openEdit));
  }, [openEdit]);

  // useEffect(() => {
  //   function sendLocalStorage() {
  //     if (!writtenCode) {
  //       return;
  //     }
  //     localStorage.setItem("code", writtenCode);
  //     // setWrittenCode(code);
  //   }
  //   sendLocalStorage();
  // }, [writtenCode]);

  const value = {
    onChange,
    receiveData,
    setReceivedData,
    handleApi,
    writtenCodeRef,
    // setWrittenCode,
    editorExtensions,
    handleJoinRoom,
    roomId,
    setRoomId,
    openEdit,
    setOpenEdit,
    handlExitRoom,
    handleClear,
  };

  return <codeContext.Provider value={value}>{children}</codeContext.Provider>;
};
