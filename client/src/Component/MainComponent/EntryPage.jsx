import React, { useContext } from "react";
import CodeEditor from "../codeEditorComponent/codeEditor";
import Room from "../RoomJoinComponent/Room";
import { codeContext } from "../../../context/codeContext";

function EntryPage() {
  const { openEdit } = useContext(codeContext);
  return <>{openEdit ? <Room /> : <CodeEditor />}</>;
}

export default EntryPage;
