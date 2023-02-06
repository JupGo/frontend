import { KakaoMapLocation } from '../types/map';
const RADIUS_EARTH_KM = 6371;
const degreesToRadians = (deg: number) => {
  return deg * (Math.PI / 180);
};
export const getDistanceKm = (mapLocationList: KakaoMapLocation[]) => {
  return mapLocationList.reduce((distance, currentLocation, index) => {
    if (index) {
      const startLatRads = degreesToRadians(currentLocation.latitude);
      const startLongRads = degreesToRadians(currentLocation.longitude);
      const destLatRads = degreesToRadians(mapLocationList[index - 1].latitude);
      const destLongRads = degreesToRadians(mapLocationList[index - 1].longitude);

      const calDistance =
        Math.acos(
          Math.sin(startLatRads) * Math.sin(destLatRads) +
            Math.cos(startLatRads) * Math.cos(destLatRads) * Math.cos(startLongRads - destLongRads),
        ) * RADIUS_EARTH_KM;
      return distance + Number(calDistance.toFixed(2));
    }
    return distance;
  }, 0);
};
