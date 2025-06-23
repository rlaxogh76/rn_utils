# 🧪 WebSocket 테스트 가이드

## 📁 디렉토리 구조

```
rn_utils/
├── backend/     # WebSocket 서버
└── frontend/    # React 클라이언트
```

---

## 1. WebSocket 서버 실행

```bash
# 루트 디렉토리에서 백엔드 폴더로 이동
cd backend

# WebSocket 서버 실행
node server.js
```

> ✅ `server.js`는 `ws` 라이브러리를 사용하여 포트(예: 8081)에서 WebSocket 서버를 열어야 합니다.

---

## 2. React 클라이언트 실행

```bash
# 새 터미널을 열고, 루트 디렉토리에서 프론트엔드 폴더로 이동
cd frontend

# React 개발 서버 실행
npm run dev
```

> ⚠️ 클라이언트 코드에서 `useWebSocket("ws://localhost:8080")`와 같이 서버 주소가 일치해야 합니다.

---

## ✅ 결과 확인

- 브라우저에서 `http://localhost:5173` 접속
- 메시지를 입력하고 전송하면 WebSocket 서버가 해당 메시지를 수신하고 응답합니다.
