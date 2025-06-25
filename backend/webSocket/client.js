const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:8080");
ws.on("open", function open() {
  console.log("서버에 연결되었습니다.");
});
ws.on("message", function incoming(data) {
  console.log("서버로부터 받은 메시지: %s", data);
});
