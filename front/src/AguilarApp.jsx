import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/index';

export const AguilarApp = () => {

  return (
    <Routes>
      <Route
        path="/"
        element={<Home/>}
      />
    </Routes>
  )
};
