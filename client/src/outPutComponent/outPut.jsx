import React from "react";

function OutPut() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-48 bg-blue-500 flex">
      {/* Changed absolute positioning to standard flex children so they don't overlap */}
      <textarea className="w-1/2 h-full text-center" placeholder="Input Area" />
      <textarea
        className="w-1/2 h-full text-center bg-amber-500 p-2"
        placeholder="OutPut area"
      />
    </div>
  );
}

export default OutPut;
