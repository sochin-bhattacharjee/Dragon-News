import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
const SocialLogin = () => {
    return (
        <div className="">
            <h1 className="font-semibold">Login With</h1>
            <div className="*:w-full">
            <button className="btn bg-white border-blue-500 flex items-center mt-5">
                <FcGoogle></FcGoogle>
                Login With Google
            </button>
            <button className="btn bg-white border-green-400 flex items-center mt-3">
                <ImGithub></ImGithub>
                Login With Github
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;