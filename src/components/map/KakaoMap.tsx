import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import MapCurrent from '../../asset/image/MapCurrent.png';
import { floggingInfoState, mapLocationInfoState } from '../../recoil/atom';
import { KakaoMapLocation } from '../../types/map';
import { getDistanceKm } from '../../utils/getDistanceKm';

const KakaoMap = () => {
  const mapLocationInfo = useRecoilValue(mapLocationInfoState);
  const setFloggingInfo = useSetRecoilState(floggingInfoState);
  const [kakaoMapInfo, setKakaoMapInfo] = useState<KakaoMapLocation>();
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

      const markerImgSrc = MapCurrent;
      const markerImgSize = new kakao.maps.Size(window.screen.width * 0.08, window.screen.width * 0.08);
      const markerImg = new kakao.maps.MarkerImage(markerImgSrc, markerImgSize);
      const markerPosition = new kakao.maps.LatLng(kakaoMapInfo.latitude, kakaoMapInfo.longitude);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImg,
      });

      const linePath = mapLocationInfo.map((location) => new kakao.maps.LatLng(location.latitude, location.longitude));
      const kakaoPolyline = new kakao.maps.Polyline({
        path: linePath,
        strokeWeight: 5,
        strokeColor: '#EF8D8A',
        strokeOpacity: 0.7,
        strokeStyle: 'solid',
      });

      marker.setMap(map);
      kakaoPolyline.setMap(map);

      setFloggingInfo((prev) => ({ ...prev, distance: getDistanceKm(mapLocationInfo) }));
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
