import React, { useContext } from "react";
import { codeContext } from "../../../context/codeContext";

function Room() {
  const { roomId, setRoomId, handleJoinRoom } = useContext(codeContext);
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 text-white">
      {/* Title Section */}
      <h1 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Collaborative Code Editor
      </h1>

      {/* Main Container */}
      <div className=" md:grid-cols-2 gap-8 w-full max-w-4xl flex justify-center items-center">
        {/* Create Room Card */}
        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl hover:border-blue-500 transition-all">
          <p className="text-xl font-semibold mb-4 text-blue-400">Enter Room</p>
          <input
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            type="text"
            placeholder="eg: 123"
            className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button
            onClick={() => handleJoinRoom(roomId)}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Enter Room
          </button>
        </div>

        {/* Join Room Card
        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl hover:border-purple-500 transition-all">
          <p className="text-xl font-semibold mb-4 text-purple-400">
            Join Room
          </p>
          <input
            type="text"
            placeholder="eg: 123"
            className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
          <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors">
            Join Now
          </button> */}
      </div>
    </div>
  );
}

export default Room;
