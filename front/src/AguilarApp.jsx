import { Route, Routes } from 'react-router-dom';
import { BuildBarbeque, Home } from './pages/index';

export const AguilarApp = () => {

  return (
    <Routes>
      <Route
        path="/"
        element={<Home/>}
      />
      <Route
        path="/build"
        element={<BuildBarbeque/>}
      />
    </Routes>
  )
};
