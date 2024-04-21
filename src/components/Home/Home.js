import "./Home.css"

import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="Home">
            <h1>Welcome to Your Learning and Development Hub</h1>
            <Link to="/Posts">
                <button>Let's Learn New Things</button>
            </Link>
        </div>
    );
}

export default Home;