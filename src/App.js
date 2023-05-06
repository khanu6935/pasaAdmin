import React, { useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Blogs,
  HomePage,
  Setting,
  Signin,
  Submission,
  Subscribers,
  Users,
  Notification,
} from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/subscribers" element={<Subscribers />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
