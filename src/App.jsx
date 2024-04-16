import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  DocumentManager,
  DownloadApp,
  Faq,
  FlightTicket,
  HomePage,
  HomePageUi,
  HostingFeatures,
  ImagesPreview,
  Notifications,
  Testimonial,
} from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/images-preview" element={<ImagesPreview />} />
        <Route path="/hosting-features" element={<HostingFeatures />} />
        <Route path="/download-app" element={<DownloadApp />} />
        <Route path="/home-page-ui" element={<HomePageUi />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/flight-ticket" element={<FlightTicket />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/document-manager" element={<DocumentManager />} />
      </Routes>
    </div>
  );
};

export default App;
