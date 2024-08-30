function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a to="/" className="btn btn-ghost text-xl">
          Scholar Sphere
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-error mx-2 p-3">Log In</a>
        <a className="btn btn-error p-3">Sign Up</a>
      </div>
    </div>
  );
}

export default Navbar;
