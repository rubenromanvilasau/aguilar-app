import { Route, Routes } from 'react-router-dom';
import { BuildBarbeque, Home, TestPage } from './pages/index';

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
      <Route
        path="/test"
        element={<TestPage/>}
      />
    </Routes>
  )
};
