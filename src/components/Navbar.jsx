import { Link } from "react-router-dom";
import userImage from "../assets/user.png"
const Navbar = () => {
    return (
        <div className="flex items-center justify-between">
            <div></div>
            <div className="space-x-3">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="flex gap-2 items-center">
                <img src={userImage} alt="" />
                <button className="btn rounded-none px-5 text-white bg-black">Login</button>
            </div>
        </div>
    );
};

export default Navbar;