import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="hover:text-green-500 font-normal">
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>

              <li>
                <a>Business Line</a>
              </li>
              <li className="hover:text-green-500 font-normal">
                <a>Impact</a>
              </li>
              <li className="hover:text-green-500 font-normal">
                <a>Publication</a>
              </li>
              <li className="hover:text-green-500 font-normal">
                <a>News</a>
              </li>

              <li className="hover:text-green-500 font-normal">
                <a>Career</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl hover:text-green-500">Helios</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:text-green-500 font-normal">
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <details>
                <summary>Business Line</summary>
                <ul className="p-2 bg-white">
                  <li className="hover:text-green-500 font-normal">
                    <a>Submenu 1</a>
                  </li>
                  <li className="hover:text-green-500 font-normal">
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="hover:text-green-500 font-normal">
              <a>Impact</a>
            </li>
            <li className="hover:text-green-500 font-normal">
              <a>Publication</a>
            </li>
            <li className="hover:text-green-500 font-normal">
              <a>News</a>
            </li>
            <li className="hover:text-green-500 font-normal">
              <a>Career</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-white text-gray-700">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
