import React, { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const Main = () => {
  useEffect(() => {
    console.log("✅ useEffect 실행");

    const script = document.createElement("script");
    const appKey = import.meta.env.VITE_KAKAO_MAP_API_KEY;

    console.log("✅ appKey:", appKey);

    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;
    script.onload = () => {
      console.log("✅ Kakao script loaded");

      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          console.log("✅ Kakao maps loaded");

          const container = document.getElementById("map");
          const options = {
            center: new window.kakao.maps.LatLng(37.5665, 126.978),
            level: 3,
          };
          new window.kakao.maps.Map(container, options);
        });
      } else {
        console.error("❌ window.kakao.maps가 존재하지 않음");
      }
    };

    script.onerror = () => {
      console.error("❌ Kakao script 로딩 실패");
    };

    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <h2>카카오 지도</h2>
      <div
        id="map"
        style={{ width: "1000px", height: "1000px", marginTop: "20px" }}
      />
    </div>
  );
};

export default Main;
