import { Link, NavLink, useLocation } from "react-router-dom";
import Footer from "../Footer";



const RootLayout = ({ children }) => {

    const { pathname } = useLocation();

    const activeStyle = {
        textDecoration: "underline",
        color: "#1c166473",
        transition: ".4s",
    };

    const menu = (
        <>

            <NavLink
                className="m-4 text-xl text-primary font-mono"
                to="/home"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                Home
            </NavLink>
            <NavLink
                className="m-4 text-xl  text-primary font-mono"
                to="/all-books"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                All Books
            </NavLink>
            <NavLink
                className="m-4 text-xl  text-primary font-mono"
                to="/add-books"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                Add Books
            </NavLink>
            <NavLink
                className="m-4 text-xl  text-primary font-mono"
                to="/edit-books"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                Edit Books
            </NavLink>
            <NavLink
                className="m-4 text-xl  text-primary font-mono"
                to="/login"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                Login
            </NavLink>


            {/* {activeUser?.email && (
            <NavLink
              className="m-4 text-xl  text-primary font-semibold  "
              to="/dashboard"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Dashboard
            </NavLink>
          )} */}

            {/* {activeUser?.email ? (
            <button
              className="m-4 text-left   text-accent font-semibold  "
              onClick={logOut}
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="m-4   text-primary font-semibold  "
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Login
            </NavLink>
          )} */}
        </>
    );


    return (
        <>
            <div>
                <div className="drawer drawer-end">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        {/* <!-- Navbar --> */}

                        <div
                            className="w-full navbar bg-slate-100 shadow-lg"
                            style={
                                pathname.includes(`/login`) ||
                                    pathname.includes(`/forgot-password`)
                                    ? { display: "none" }
                                    : { display: "flex" }
                            }
                        >
                            <div className="container mx-auto px-4">


                                <div className="navbar-start">
                                    <div className="flex-1 relative w-48">
                                        <Link to="/">
                                            <h1 className="text-3xl font-medium text-primary">Book Hub</h1>
                                        </Link>
                                    </div>
                                </div>

                                <div className="navbar-center">
                                    <div className=" flex-none hidden lg:block">
                                        <ul className="menu menu-horizontal">
                                            {/* <!-- Navbar menu content here --> */}
                                            {menu}
                                        </ul>
                                    </div>
                                </div>

                                <div className="navbar-end text-end h-full">
                                    <div className="flex-none lg:hidden">
                                        <label
                                            htmlFor="my-drawer-3"
                                            className="btn btn-square btn-ghost"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                className="inline-block w-6 h-6 stroke-current"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                ></path>
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Page content here --> */}
                        {children}
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-80  bg-base-100">
                            {/* <!-- Sidebar content here --> */}
                            {menu}
                        </ul>
                    </div>
                </div>
                <footer className="">
                    <Footer />
                </footer>
            </div>
        </>

    )
}

export default RootLayout