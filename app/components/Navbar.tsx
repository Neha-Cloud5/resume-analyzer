import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar bg-transparent px-6 py-4 flex items-center">
           <Link to="/">
                <p className="text-1xl font-bold text-gradient">
                Smart Resume Analyzer
                </p>

            </Link>
            
            <Link to="/dashboard" className="primary-button w-fit">
                Go to Dashboard
            </Link>
        
        </nav>
    );
}
export default Navbar;