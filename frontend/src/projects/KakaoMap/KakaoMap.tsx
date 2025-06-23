import { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMapPage = () => {
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  useEffect(() => {
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
    } else if (window.kakao?.maps) {
      initializeMap();
    }

    function initializeMap() {
      if (mapRef.current) return;

      const container = document.getElementById("map")!;
      const options = {
        center: new window.kakao.maps.LatLng(37.5665, 126.978),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);
      mapRef.current = map;

      window.kakao.maps.event.addListener(
        map,
        "click",
        (e: { latLng: any }) => {
          const clickPosition = e.latLng;

          if (markerRef.current) {
            markerRef.current.setMap(null);
          }

          const markerImageUrl =
            "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png";

          const markerImage = new window.kakao.maps.MarkerImage(
            markerImageUrl,
            new window.kakao.maps.Size(32, 32),
            { offset: new window.kakao.maps.Point(16, 32) }
          );

          const marker = new window.kakao.maps.Marker({
            position: clickPosition,
            image: markerImage,
          });

          marker.setMap(map);
          markerRef.current = marker;

          console.log("커스텀 마커 추가:", clickPosition);
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

export default KakaoMapPage;
