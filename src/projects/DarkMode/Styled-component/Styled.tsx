import { CiLight } from "react-icons/ci"; // 아이콘 사용 유지
import { MdDarkMode } from "react-icons/md";
import styled from "styled-components";

// App.css 영향을 그대로 받되, Styled Components로 세련되게 구성

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f8f9fa;
  color: #333;
  display: flex;
  flex-direction: column;
`;
const Header = styled.header`
  height: 60px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
`;

const IconGroup = styled.div`
  display: flex;
  gap: 10px;
  font-size: 24px;
  cursor: pointer;
`;

const Body = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Styled() {
  return (
    <Wrapper>
      <Header>
        <Title>rlaxogh76</Title>
        <IconGroup>
          <CiLight />
          <MdDarkMode />
        </IconGroup>
      </Header>
      <Body>
        <h1>Dark Mode</h1>
      </Body>
    </Wrapper>
  );
}
