import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Main은 여기서 import 하지 않아도 됩니다!
// import Main from "./projects/KakaoMap/Main";

const Kakao_Map_Btn = styled.button`
  background-color: #2fa2ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px;
  &:hover {
    background-color: #217bfa;
  }
`;

const Naver_Map_Btn = styled.button`
  background-color: #2fa2ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px;
  &:hover {
    background-color: #217bfa;
  }
`;

export default function Test() {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate("/projects/KakaoMap/main"); // Main.tsx 라우트로 이동
  };

  const handleNaver = (): void => {
    navigate("/projects/NaverMap/main");
  }

  return (
    <div>
      <h1>Test</h1>
      <Kakao_Map_Btn onClick={handleClick}>카카오맵 이동</Kakao_Map_Btn>
      <Naver_Map_Btn onClick={handleNaver}>네이버맵 이동</Naver_Map_Btn>
    </div>
  );
}
