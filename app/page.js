import Contact from "../components/Contact/Contact";
import AboutMe from "../components/AboutMe/AboutMe";
import Projects from "../components/projects/Projects";

export default function Home() {
    return (
        <div className="px-10">
            <AboutMe />
            <Projects />
            <Contact />
        </div>
    );
}
