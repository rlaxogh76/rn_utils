const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(bodyParser.json()); // JSON 파싱
app.use(cors()); // CORS 허용

// 메모리 내 사용자 목록 저장
let users = [];

// 사용자 등록 (POST /users)
app.post("/users", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "모든 필드를 입력해주세요." });
  }

  const newUser = {
    id: users.length + 1,
    username,
    email,
    password, // 실제 서비스에서는 해싱 필수!
  };

  users.push(newUser);

  res.status(201).json({
    message: "사용자 등록 완료",
    user: newUser,
  });
});

// 모든 사용자 조회 (GET /users)
app.get("/users", (req, res) => {
  res.json(users);
});

// 서버 시작
app.listen(port, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${port}`);
});
