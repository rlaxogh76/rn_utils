import './App.css';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';
import Gallery from './Gallery';
import FuzzyText from './projects/ReactBits/FuzzyText/FuzzyText';
import Cubes from './projects/ReactBits/Cubes/Cubes';
import PixelCard from './projects/ReactBits/PixelCard/PixelCard';
import ShinyText from './projects/ReactBits/ShinyText/ShinyText';
import WebSocketPage from './projects/WebSocket/WebSocketConnection';
import AirbnbClone from './projects/AirbnbClone/Airbnb';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import KakaoMapPage from './projects/Map/KakaoMap/KakaoMap';
import FetchTestPage from './projects/Fetch/FetchTest';

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
  window.open('https://github.com/rlaxogh76/rn_utils', '_blank', 'noopener,noreferrer');
};

const App = () => {
  const navigate = useNavigate();
  const { ref: snapRef, inView } = useInView({ threshold: 0.6 });

  const handleClick = (): void => {
    navigate('/Gallery');
  };

  return (
    <ScrollSnapWrap>
      <SnapDiv>
        <motion.h1
          style={{ fontSize: '50px', color: '#fff' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              'Hooks',
              1500,
              '',
              'styled_components',
              1500,
              '',
              'react-router',
              1500,
              '',
              'react-type-animation',
              1500,
              '',
              'typescript',
              1500,
              '',
              'vite',
              1500,
              '',
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ color: '#0088ff' }}
          />{' '}
          기반의 저장소
        </motion.h1>

        <motion.div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '20px',
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
    path: '/',
    element: <App />,
  },
  {
    path: '/Gallery',
    element: <Gallery />,
  },
  {
    path: '/projects/KakaoMap/KakaoMap',
    element: <KakaoMapPage />,
  },
  {
    path: '/projects/FuzzyText/fuzzytext',
    element: (
      <div className="container">
        <FuzzyText baseIntensity={0.2} fontSize={200}>
          404
        </FuzzyText>
        <FuzzyText>Not Found</FuzzyText>
      </div>
    ),
  },
  {
    path: '/projects/Cubes/Cubes',
    element: (
      <div className="container">
        <div className="cubes-container" style={{ height: '600px', position: 'relative' }}>
          <Cubes
            gridSize={10}
            maxAngle={45}
            radius={4}
            borderStyle="2px dashed #B19EEF"
            faceColor="#1a1a2e"
            rippleColor="#fff"
            rippleSpeed={3}
            autoAnimate={true}
            rippleOnClick={true}
          />
        </div>
      </div>
    ),
  },
  {
    path: '/projects/PixelCard/PixelCard',
    element: (
      <div className="container">
        <PixelCard variant="pink">hello I'm developer</PixelCard>
      </div>
    ),
  },
  {
    path: '/projects/ShinyText/ShinyText',
    element: (
      <ShinyText text="Just some shiny text!" disabled={false} speed={3} className="custom-class" />
    ),
  },
  {
    path: '/projects/WebSocket/WebSocket',
    element: <WebSocketPage />,
  },
  {
    path: '/projects/Fetch/FetchTest',
    element: <FetchTestPage />,
  },
  {
    path: '/projects/AirbnbClone/airbnb',
    element: <AirbnbClone />,
  },
]);

export default function Root() {
  return <RouterProvider router={router} />;
}
