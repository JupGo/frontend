import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Authentication from '../../pages/Authentication';
import DiaryDetail from '../../pages/DiaryDetail';
import DiaryDetailAll from '../../pages/DiaryDetailAll';
import Error404 from '../../pages/Error404';
import Login from '../../pages/Login';
import Main from '../../pages/Main';
import Map from '../../pages/Map';
import Mypage from '../../pages/Mypage';
import TreeDiary from '../../pages/TreeDiary';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/treediary" element={<TreeDiary />}>
          <Route path="detail" element={<DiaryDetail />} />
          <Route path="detailall" element={<DiaryDetailAll />} />
        </Route>
        <Route path="/map" element={<Map />}>
          <Route path="authentication" element={<Authentication />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
