import './Nav.css';
const Nav = () => {
  return (
   <div className="navbar-container">
            <div className="container mx-auto">
                <div className="navbar px-6">
                    <div className="navbar-start">
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mobile-menu-button">
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu rounded-box z-50 w-52 p-2 shadow">
                                <li><a className="navbar-link transition-colors">Features</a></li>
                                <li><a className="navbar-link transition-colors">Interviews</a></li>
                                <li><a className="navbar-link transition-colors">Student Wins</a></li>
                                <li className="dropdown dropdown-hover dropdown-right">
                                    <div tabIndex={0} role="button" className="navbar-link transition-colors flex items-center gap-1">
                                        Courses
                                        <svg className="w-4 h-4 transition-transform duration-200 dropdown-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <div tabIndex={0} className="dropdown-content rounded-box z-50 w-64 p-4 shadow-lg">
                                        <div className="space-y-3">
                                            <div>
                                                <h3 className="navbar-link font-semibold text-base mb-1">Copywriting</h3>
                                            </div>
                                            <div>
                                                <h3 className="navbar-link font-semibold text-base mb-1">Stocks</h3>
                                            </div>
                                            <div>
                                                <h3 className="navbar-link font-semibold text-base mb-1">Freelancing</h3>
                                            </div>
                                            <div>
                                                <h3 className="navbar-link font-semibold text-base mb-1">Business & Finance</h3>
                                            </div>
                                            <div>
                                                <h3 className="navbar-link font-semibold text-base mb-1">E-commerce</h3>
                                            </div>
                                            <div>
                                                <h3 className="navbar-link font-semibold text-base mb-1">Content Creation + AI</h3>
                                            </div>
                                        </div>
                                    </div>
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
                            <li className="dropdown dropdown-hover dropdown-bottom dropdown-center">
                                <div tabIndex={0} role="button" className="navbar-link cursor-pointer transition-colors flex items-center gap-1">
                                    Courses
                                    <svg className="w-4 h-4 transition-transform duration-200 dropdown-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu rounded-box z-50 shadow-lg" style={{ width: '500px' }}>
                                    <div className="grid grid-cols-2 gap-8">
                                        {/* Left Column */}
                                        <div className="space-y-2">
                                            <li>
                                                <a href="#" className="dropdown-menu font-semibold text-lg">Copywriting</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-menu font-semibold text-lg">Freelancing</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-menu font-semibold text-lg">E-commerce</a>
                                            </li>
                                        </div>
                                        
                                        {/* Right Column */}
                                        <div className="space-y-2">
                                            <li>
                                                <a href="#" className="dropdown-menu font-semibold text-lg">Stocks</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-menu font-semibold text-lg">Business & Finance</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-menu font-semibold text-lg ">Content Creation + AI</a>
                                            </li>
                                        </div>
                                    </div>
                                </ul>
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

export default Nav;
