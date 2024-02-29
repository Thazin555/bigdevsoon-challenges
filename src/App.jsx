import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, ImagesPreview, Notifications } from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/images-preview" element={<ImagesPreview />} />
      </Routes>
    </div>
  );
};

export default App;
