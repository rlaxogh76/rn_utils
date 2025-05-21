import "./App.css";
import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";
import Test from "./Test";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// 스크롤 래퍼
const ScrollSnapWrap = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

// 섹션
const SnapDiv = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

const Git_btn = styled.button`
  background-color: #898989;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px;
  &:hover {
    background-color: #474747;
  }
`;

const Util_btn = styled.button`
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

const handleGithub = (): void => {
  window.open("https://github.com/rlaxogh76", "_blank", "noopener,noreferrer");
};

const App = () => {
  const navigate = useNavigate();
  const { ref: snapRef, inView } = useInView({ threshold: 0.6 });

  const handleClick = (): void => {
    navigate("/test");
  };

  return (
    <ScrollSnapWrap>
      <SnapDiv>
        <motion.h1
          style={{ fontSize: "50px", color: "#fff" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              "Hooks",
              1500,
              "",
              "styled_components",
              1500,
              "",
              "react-router",
              1500,
              "",
              "react-type-animation",
              1500,
              "",
              "typescript",
              1500,
              "",
              "vite",
              1500,
              "",
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ color: "#0088ff" }}
          />{" "}
          기반의 저장소
        </motion.h1>

        <motion.div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "20px",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <Git_btn onClick={handleGithub}>깃허브</Git_btn>
          <Util_btn onClick={handleClick}>모음집 바로가기</Util_btn>
        </motion.div>
      </SnapDiv>

      <SnapDiv ref={snapRef}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          Hello
        </motion.h1>
      </SnapDiv>

      <SnapDiv>
        <h1>world!</h1>
      </SnapDiv>

      <SnapDiv>
        <h1>react</h1>
      </SnapDiv>
    </ScrollSnapWrap>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

export default function Root() {
  return <RouterProvider router={router} />;
}
