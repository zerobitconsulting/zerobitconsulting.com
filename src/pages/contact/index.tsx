import type { NextPage } from "next";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import MenuBar from "../../../components/Menubar";

const Contact: NextPage = () => {
    return (
        <>
            <Header />
            <MenuBar></MenuBar>
            <main className="container mx-auto flex flex-col min-h-screen p-8 mb-5 mt-3">
                <div>
                    <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700"> 
                        <span className="text-black-500 display-4 mb-4">Contact Us</span>
                    </h1>
                    <h3 className="color_sec py-4 text-3xl">Get in touch with our team</h3>
                    <br />
                </div>
                <div className="items-left text-black">
                    <h6>
                        <p><strong>Email: </strong>zerobitconsulting@gmail.com</p>
                        <br />
                        <p><strong>Phone Number: </strong>+x-xxx-xxx-xxxx</p>
                    </h6>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Contact