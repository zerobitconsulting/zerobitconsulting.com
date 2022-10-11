import { Typography } from "@mui/material";
import { Container, typography } from "@mui/system";
import type { NextPage } from "next";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import MenuBar from "../../../components/Menubar";

const Contact: NextPage = () => {
    return (
        <>
            <Header />
            <MenuBar></MenuBar>
            <main className="container mx-auto flex flex-col min-h-screen p-4">
                <div>
                    <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700"> 
                        <span className="text-black-500">Contact Page</span>
                    </h1>
                </div>
                <div className="items-left text-black">
                    <h6>
                        <p><strong>Email: </strong>zerobitconsulting@gmail.com</p>
                        <p><strong>Phone Number: </strong></p>
                    </h6>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Contact