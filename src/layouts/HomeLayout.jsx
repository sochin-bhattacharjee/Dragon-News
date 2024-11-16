import Marquee from "react-fast-marquee";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto flex items-center">
                    <p className="bg-[#D72050] text-white px-3 py-2">Latest</p>
                    <Marquee pauseOnHover={true} speed={50} className="space-x-5">
                        <Link to='/news'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veritatis?</Link>
                        <Link to='/news'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veritatis?</Link>
                        <Link to='/news'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veritatis?</Link>
                    </Marquee>
                </section>
            </header>
            <nav></nav>
            <main></main>
        </div>
    );
};

export default HomeLayout;