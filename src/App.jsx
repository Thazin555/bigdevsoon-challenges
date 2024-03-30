import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  HostingFeatures,
  ImagesPreview,
  Notifications,
} from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/images-preview" element={<ImagesPreview />} /> */}
        <Route path="/hosting-features" element={<HostingFeatures />} />
      </Routes>
    </div>
  );
};

export default App;
