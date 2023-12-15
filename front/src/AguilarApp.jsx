import { Route, Routes } from 'react-router-dom';
import { BuildBarbeque, DownloadImagePage, Home, ResultsPage, TestPage, ThanksPage } from './pages/index';

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
      <Route
        path="/results/:id"
        element={<ResultsPage/>}
      />
      <Route
        path="/download-image/:id"
        element={<DownloadImagePage/>}
      />
      <Route
        path="/thanks"
        element={<ThanksPage/>}
      />
    </Routes>
  )
};
