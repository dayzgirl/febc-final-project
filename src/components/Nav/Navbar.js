import "./Navbar.css"
import CreatePostModal from "../Modals/CreatePostModal";

import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <nav>
            {" "}
            <div className="logo">
                <Link to="/">MTB</Link>
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

export default navbar;