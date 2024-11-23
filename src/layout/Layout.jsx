import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Navbar2 from "../navbar/Navbar2";

const Layout = () => {
  return (
    <div>
      <Navbar2></Navbar2>
      <Navbar></Navbar>

      <div className=" mx-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
