import type { NextPage } from "next";
import { io } from "socket.io-client";
import { useEffect } from "react";

const Home: NextPage = () => {
  const socket = io("http://localhost:4200/", {
    transports: ["websocket", "polling", "flashsocket"],
  });

  useEffect(() => {
    socket.on("xxx", (data: { message: string }) => {
      console.log(data);
    });
  }, [socket]);

  const click = () => {
    socket.emit("yyy", { message: `client message` });
  };

  return (
    <div>
      Home
      <button onClick={click}>イベント送信</button>
    </div>
  );
};

export default Home;
