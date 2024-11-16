import Marquee from "react-fast-marquee";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import LeftContent from "../components/layout-components/LeftContent";
import MainContent from "../components/layout-components/MainContent";
import RightContent from "../components/layout-components/RightContent";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto flex items-center bg-base-300 p-2 rounded-[2px]">
                    <p className="bg-[#D72050] text-white px-3 py-2">Latest</p>
                    <Marquee pauseOnHover={true} speed={50} className="space-x-5">
                        <Link to='/news'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veritatis?</Link>
                        <Link to='/news'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veritatis?</Link>
                        <Link to='/news'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veritatis?</Link>
                    </Marquee>
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-4">
            <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto gap-5 grid grid-cols-12">
                <aside className="col-span-3"><LeftContent></LeftContent></aside>
                <section className="col-span-6"><MainContent></MainContent></section>
                <aside className="col-span-3"><RightContent></RightContent></aside>
            </main>
        </div>
    );
};

export default HomeLayout;