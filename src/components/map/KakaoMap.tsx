import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { KakaoMapInfo } from '../../types/map';

const KakaoMap = () => {
  const [kakaoMapInfo, setKakaoMapInfo] = useState<KakaoMapInfo>();
  const { kakao } = window;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setKakaoMapInfo({ latitude: position.coords.latitude, longitude: position.coords.longitude });
      });
    }
  }, []);
  useEffect(() => {
    if (kakaoMapInfo) {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(kakaoMapInfo.latitude, kakaoMapInfo.longitude),
        level: 3,
      };

      const map = new kakao.maps.Map(container, options);
      const markerPosition = new kakao.maps.LatLng(kakaoMapInfo.latitude, kakaoMapInfo.longitude);

      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);
    }
  }, [kakaoMapInfo]);

  if (!kakaoMapInfo) return <div>Loading중...</div>;
  return <StMapWrapper id="map" />;
};

export default KakaoMap;

const StMapWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
