import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../partials/header/Header";
import Footer from "../partials/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";
const RootLayout = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <Header setToggle={setToggle} />
      <Sidebar toggleSidebar={toggle} setToggle={setToggle} />
      <Outlet />
      <Footer />
    </div>
  );
};
export default RootLayout;
