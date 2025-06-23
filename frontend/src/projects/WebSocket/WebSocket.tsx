import useWebSocket from "react-use-websocket"; // { useWebSocket }사용 시 오류 발생
import React, { useState } from "react";

const WebSocketPage = () => {
  const socketUrl = "ws://localhost:8080"; // ⚠️ 개발 시엔 보통 ws://
  const { sendMessage, lastMessage } = useWebSocket(socketUrl);

  const [message, setMessage] = useState("");

  const send = () => {
    if (message.trim() !== "") {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>WebSocket 테스트</h2>
      <div style={{ marginBottom: "10px" }}>
        마지막 수신 메시지: {lastMessage?.data || "없음"}
      </div>
      <input
        type="text"
        placeholder="메시지를 입력하세요"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={send}>메시지 보내기</button>
    </div>
  );
};

export default WebSocketPage;
