import { Component, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  const [map, setMap] = useState({});
  const [latitude, setLatitude] = useState<number>();
  const [longtitude, setLongtitude] = useState<number>();
  //   const latitude = useRef<number>();
  //   const longtitude = useRef<number>();

  const { kakao } = window;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongtitude(position.coords.longitude);
        // latitude.current = position.coords.latitude;
        // longtitude.current = position.coords.longitude;

        console.log(latitude, longtitude);
      });
    }
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(latitude, longtitude),
      level: 3,
    };

    setMap(new kakao.maps.Map(container, options));
  }, []);

  console.log('밖', latitude, longtitude);
  return latitude != undefined && longtitude != undefined ? (
    <StMapWrapper id="map"></StMapWrapper>
  ) : (
    <div>lodiing중...</div>
  );
};

export default KakaoMap;

const StMapWrapper = styled.div`
  width: 39rem;
  height: 84.4rem;
`;
