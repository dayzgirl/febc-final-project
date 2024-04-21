import "./Navbar.css"
import CreatePostModal from "../Modals/CreatePostModal";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            {" "}
            <div className="logo">
                <Link to="/">
                    <img src="./logo.png"  style={{ width: '50px', height: '50px' }} />
                </Link>
            </div>
            <ul>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li><CreatePostModal /></li>
            </ul>
        </nav>
    );
};

export default Navbar;