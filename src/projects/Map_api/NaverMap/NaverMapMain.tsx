import { useState, useEffect, useRef } from 'react';

let mapInstance: naver.maps.Map | null = null;

const loadScript = (src: string, callback: () => void) => {
  console.log('[loadScript] 스크립트 로딩 시작:', src);
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.async = true;
  script.onload = () => {
    console.log('[loadScript] 스크립트 로딩 완료');
    callback();
  };
  script.onerror = () => {
    console.error('[loadScript] 스크립트 로딩 실패');
  };
  document.head.appendChild(script);
};

interface Props {
  latitude: number;
  longitude: number;
}

function NaverMapMain({ latitude, longitude }: Props) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [isScriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    console.log('[useEffect 1] window.naver 존재 여부:', typeof window.naver);
    if (typeof window.naver === 'undefined') {
      loadScript(
        'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=zm9v2wtukb',
        () => {
          console.log('[useEffect 1] 스크립트 로딩 후 상태 변경');
          setScriptLoaded(true);
        }
      );
    } else {
      console.log('[useEffect 1] 이미 naver 존재함');
      setScriptLoaded(true);
    }
  }, []);

  useEffect(() => {
    console.log('[useEffect 2] isScriptLoaded:', isScriptLoaded);
    console.log('[useEffect 2] mapRef:', mapRef.current);
    console.log('[useEffect 2] window.naver.maps 존재 여부:', !!window.naver?.maps?.LatLng);

    if (!isScriptLoaded || !mapRef.current || !window.naver?.maps?.LatLng) {
      console.warn('[useEffect 2] 조건 미충족으로 지도 생성 스킵');
      return;
    }

    console.log('[useEffect 2] 지도 생성 시작');

    const position = new window.naver.maps.LatLng(latitude, longitude);

    const mapOptions = {
      center: position,
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: {
        style: window.naver.maps.ZoomControlStyle.SMALL,
        position: window.naver.maps.Position.TOP_RIGHT,
      },
    };

    mapInstance = new window.naver.maps.Map(mapRef.current, mapOptions);
    console.log('[useEffect 2] 지도 인스턴스 생성 완료');

    const marker = new window.naver.maps.Marker({
      position,
      map: mapInstance,
    });
    console.log('[useEffect 2] 마커 생성 완료');

    window.naver.maps.Event.addListener(marker, 'click', () => {
      console.log('[useEffect 2] 마커 클릭됨');
      mapInstance?.setCenter(position);
      mapInstance?.setZoom(16);
    });

  }, [isScriptLoaded, latitude, longitude]);

  return (
    <div className="mb-8 mt-40 flex w-screen flex-col items-center">
      <span className="sm:text-md font-Pretendard text-sm font-bold text-[#06439F] md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        위치 안내
      </span>
      <div
        ref={mapRef}
        className="mt-4 h-[500px] w-11/12 sm:mt-6 lg:mt-8"
        id="map"
      />
    </div>
  );
}

export default NaverMapMain;
