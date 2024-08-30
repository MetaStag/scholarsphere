import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-xl">Scholar Sphere</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/upload">Upload</Link></li>
                <li><Link to="/report">Report</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-error mx-2 p-3">Log In</a>
                <a className="btn btn-error p-3">Sign Up</a>
            </div>
</div>
    )
}

export default Navbar