# 📖 study.md 템플릿

각 기능 구현자는 아래 템플릿을 참고하여 기능별 `README.md` 작성과 함께  
`study.md`에 구체적인 코드 설명과 학습 내용을 기록해주세요.

---

## 🧩 기능 이름

예: Naver Map API 연동

---

## ✍️ 작성자

- GitHub ID: `@YourGitHubID`
- 작성일: `YYYY.MM.DD`

---

## 📌 구현 목적

- 이 기능을 구현하게 된 배경이나 이유는 무엇인가요?
- 어떤 상황에서 필요하다고 느꼈나요?

---

## 🧠 구현 방식 및 코드 설명

### 📁 주요 구조

- 컴포넌트 또는 함수 구조를 간단히 설명해주세요.
- 필요한 경우 다이어그램이나 파일 구조도 추가하세요.

### 🧩 핵심 코드

```js
useEffect(() => {
  const { naver } = window;
  const map = new naver.maps.Map("map", {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10,
  });
}, []);
```

- `useEffect`를 사용해 컴포넌트 마운트 시 지도를 초기화함
- `window.naver`를 통해 네이버 맵 객체에 접근

---

## 💡 구현 시 어려웠던 점 / 해결 방법

- 어떤 부분에서 문제가 있었고, 어떻게 해결했는지 간략히 기록해주세요.

---

## 🚀 추가 개선 아이디어

- 추후 어떤 방식으로 확장하거나 리팩토링할 수 있을지 자유롭게 작성

---

> ✨ 위 항목 중 해당되지 않는 내용은 생략해도 좋으며, 자유롭게 수정 가능합니다.
