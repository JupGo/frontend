import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { FloggingData } from '../types/flogging';

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
