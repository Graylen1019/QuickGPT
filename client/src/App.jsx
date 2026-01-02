import React from "react";
import Sidebar from "./components/sidebar";
import { Route, Routes } from "react-router-dom";
import ChatBox from "./components/chat-box";
import Login from "./pages/login";
import Credits from "./pages/credits";
import Community from "./pages/community";

const App = () => {
  return (
    <>
      <div className="dark:bg-linear-to-b from-[#242124] to-[#000000] dark:text-white">
        <div className="flex h-screen w-screen">
          <Sidebar />
          <Routes>
            <Route path="/" element={<ChatBox />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/login" element={<Login />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
