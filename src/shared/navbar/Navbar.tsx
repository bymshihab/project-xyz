
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="container mx-auto">
                <div className="navbar px-6">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mobile-menu-button">
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul className="menu menu-sm dropdown-content dropdown-menu rounded-box z-10 mt-3 w-52 p-2 shadow-lg">
                                <li><a className="navbar-link transition-colors">Features</a></li>
                                <li><a className="navbar-link transition-colors">Interviews</a></li>
                                <li><a className="navbar-link transition-colors">Student Wins</a></li>
                                <li>
                                    <a className="navbar-link transition-colors">Courses</a>
                                    <ul className="p-2">
                                        <li><a className="navbar-link transition-colors">Course 1</a></li>
                                        <li><a className="navbar-link transition-colors">Course 2</a></li>
                                    </ul>
                                </li>
                                <li><a className="navbar-link transition-colors">About Andrew</a></li>
                            </ul>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="navbar-brand text-xl font-bold">The Real World</span>
                            <div className="navbar-logo w-8 h-8 rounded-full flex items-center justify-center">
                                <span >
                                    <img src="/logo.svg" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
            
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-6">
                            <li><a className="navbar-link transition-colors">Features</a></li>
                            <li><a className="navbar-link transition-colors">Interviews</a></li>
                            <li><a className="navbar-link transition-colors">Student Wins</a></li>
                            <li>
                                <details>
                                    <summary className="navbar-link cursor-pointer transition-colors">Courses</summary>
                                    <ul className="dropdown-submenu p-2 rounded-lg shadow-lg z-10 w-40">
                                        <li><a className="navbar-link transition-colors">Course 1</a></li>
                                        <li><a className="navbar-link transition-colors">Course 2</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a className="navbar-link transition-colors">About Andrew</a></li>
                        </ul>
                    </div>
                    
                    <div className="navbar-end flex gap-3">
                        <a href="#" className="btn-login btn btn-ghost border-2 px-4 py-2 rounded-md transition-all">
                            Log in
                        </a>
                        <a href="#" className="btn-join btn px-4 py-2 rounded-md border-none transition-colors">
                            Join Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
