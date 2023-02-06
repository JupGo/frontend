import { useCallback, useRef } from 'react';
import { useRecoilState } from 'recoil';

import { mapLocationInfoState } from '../../recoil/atom';

const useCurrentLocation = () => {
  const [mapLocationInfo, setMapLocationInfo] = useRecoilState(mapLocationInfoState);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startRecordLocation = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          const filterMapLocationInfo = mapLocationInfo.filter(
            ({ latitude, longitude }) => coords.latitude !== latitude && coords.longitude !== longitude,
          );
          if (filterMapLocationInfo.length === mapLocationInfo.length)
            setMapLocationInfo([...mapLocationInfo, { latitude: coords.latitude, longitude: coords.longitude }]);
        });
      }
    }, 1000);
  }, []);

  const stopRecordLocation = useCallback(() => {
    if (!intervalRef.current) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  return { startRecordLocation, stopRecordLocation };
};

export default useCurrentLocation;
