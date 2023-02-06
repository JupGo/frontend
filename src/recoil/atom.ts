import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { FloggingData } from '../types/flogging';
import { KakaoMapLocation } from '../types/map';

const { persistAtom } = recoilPersist();

export const floggingInfoState = atom<FloggingData>({
  key: 'floggingInfo',
  default: {
    date: '2023.01.12',
    location: '인천',
    distance: 0,
    duration: '00:00:00',
    photo: new FormData(),
  },
  effects_UNSTABLE: [persistAtom],
});

export const mapLocationInfoState = atom<KakaoMapLocation[]>({
  key: 'mapLocationInfo',
  default: [
    { latitude: 37.5017936, longitude: 126.8831826 },
    { latitude: 37.5, longitude: 126.8841 },
  ],
});
