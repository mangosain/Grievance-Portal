import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navbar fixed top-0 bg-white bg-opacity-20 backdrop-blur-md z-10 shadow-md md:shadow-none">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-info"
          >
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-xl"
          >
            <li className="border-b py-1">
              <Link href="/">Home</Link>
            </li>
            <li className="border-b py-1">
              <Link href="./grievanceForm">Register a grievance</Link>
            </li>
            <li className="border-b py-1">
              <Link href="./faq">F.A.Qs</Link>
            </li>
            <li className="py-1">
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden md:inline">
        <Link href="/" className="btn btn-ghost text-xl text-info">
          Grievance Portal
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full border-2 border-info hover:border-none">
              <img
                alt="Profile Picture"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-xl"
          >
            <li className="border-b py-1">
              <a>Student Login</a>
            </li>
            <li className="py-1">
              <a>Admin Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
