import { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

// kakao map api 불러오기
const Main = () => {
  const mapRef = useRef<any>(null); // 맵 객체를 저장할 ref
  const markerRef = useRef<any>(null); // 마커 객체를 저장할 ref

  useEffect(() => {
    console.log("useEffect 실행");

    const existingScript = document.getElementById("kakao-map-script");
    const appKey = import.meta.env.VITE_KAKAO_MAP_API_KEY;

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "kakao-map-script";
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}`;
      script.async = true;
      script.onload = initializeMap;
      script.onerror = () => console.error("Kakao script 로딩 실패");
      document.head.appendChild(script);
    } else {
      if (window.kakao?.maps) {
        initializeMap();
      }
    }

    function initializeMap() {
      console.log("Kakao maps loaded");

      if (mapRef.current) {
        console.log("Map already initialized");
        return;
      }

      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(37.5665, 126.978),
        level: 3,
      };

      const map = new window.kakao.maps.Map(container, options);
      mapRef.current = map;

      // 클릭 이벤트 등록
      window.kakao.maps.event.addListener(
        map,
        "click",
        function (mouseEvent: { latLng: any }) {
          const clickPosition = mouseEvent.latLng;

          // 기존 마커 제거
          if (markerRef.current) {
            markerRef.current.setMap(null);
          }

          // 새 마커 생성 (클릭한 위치에)
          const marker = new window.kakao.maps.Marker({
            position: clickPosition,
          });

          marker.setMap(map);
          markerRef.current = marker;

          console.log("마커가 클릭 위치에 추가되었습니다:", clickPosition);
        }
      );
    }
  }, []);

  return (
    <div>
      <h2>카카오 지도</h2>
      <div
        id="map"
        style={{
          width: "1000px",
          height: "500px",
          marginTop: "20px",
          border: "1px solid #ccc",
          borderRadius: "25px",
        }}
      />
    </div>
  );
};

export default Main;
