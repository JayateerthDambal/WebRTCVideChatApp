import React, { useCallback, useState } from "react";
import { useSocket } from "../contexts/SocketProvider";

const Lobby = () => {
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");

  const socket = useSocket();

  console.log(socket);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, roomId });
    },
    [email, roomId, socket]
  );
  return (
    <div>
      <h1>Lobby</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email ID: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="email">Room ID: </label>
        <input
          type="text"
          id="roomId"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />

        <br />
        <button type="submit">Join Room</button>
      </form>
    </div>
  );
};

export default Lobby;
