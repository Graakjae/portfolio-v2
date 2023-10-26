import Image from "next/image";
import Contact from "../components/Contact/Contact";
import AboutMe from "../components/AboutMe/AboutMe";
import Projects from "../components/projects/Projects";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
    return (
        <div className="px-10">
            <AboutMe />
            <Projects />
            <Contact />
        </div>
    );
}
