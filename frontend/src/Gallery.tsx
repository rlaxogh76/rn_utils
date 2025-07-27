import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./Test.css";

// Main은 여기서 import 하지 않아도 됩니다!
// import Main from "./projects/KakaoMap/Main";

const Btn = styled.button`
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

export default function Gallery() {
  const navigate = useNavigate();

  const handleClickKakaoMap = (): void => {
    navigate("/projects/KakaoMap/KakaoMap"); // Main.tsx 라우트로 이동
  };
  const handleClickFuzzyText = (): void => {
    navigate("/projects/FuzzyText/FuzzyText");
  };
  const handleClickCubes = (): void => {
    navigate("/projects/Cubes/Cubes");
  };
  const handleClickPixelCard = (): void => {
    navigate("/projects/PixelCard/PixelCard");
  };
  const handleClickWebSocket = (): void => {
    navigate("/projects/WebSocket/WebSocket");
  };
  const handleClickFetchTest = (): void => {
    navigate("/projects/Fetch/FetchTest");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Test</h1>
      <Btn onClick={handleClickKakaoMap}>카카오맵 이동</Btn>
      <Btn onClick={handleClickFuzzyText}>FuzzyText로 이동</Btn>
      <Btn onClick={handleClickCubes}>Cubes로 이동</Btn>
      <Btn onClick={handleClickPixelCard}>PixelCard로 이동</Btn>
      <Btn onClick={handleClickWebSocket}>WebSocket로 이동</Btn>
      <Btn onClick={handleClickFetchTest}>FetchTest로 이동</Btn>
    </div>
  );
}
