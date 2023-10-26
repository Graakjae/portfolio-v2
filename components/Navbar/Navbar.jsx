"use client";
import Image from "next/image";
import Switch from "../switch/switch";
import { Heading, Midi, UL } from "@/theming/styles";
import Link from "next/link";
import { StyledHeader } from "./styles";

export default function Navbar({ setDarkMode, darkMode, setDisableScroll, spread, mode, toggleMode }) {
    return (
        <StyledHeader style={{ mixBlendMode: "difference" }}>
            <div
                style={{
                    mixBlendMode: "difference",
                    color: "white"
                }}
                className="flex justify-between items-center w-full h-[126px] px-10"
            >
                <Link href="/">
                    <h1 className="text-3xl font-bold">FREDERIK GRAAKJÆR</h1>
                </Link>
                <nav style={{ mixBlendMode: "difference" }}>
                    <ul className="flex items-center space-x-4 gap-8 drop-shadow-lg border-red-800">
                        <li>
                            <a href="#about">ABOUT ME</a>
                        </li>
                        <li>
                            <a href="#projects">PROJECTS</a>
                        </li>
                        <li>
                            <a href="#contact">CONTACT</a>
                        </li>
                        <Switch
                            setDarkMode={setDarkMode}
                            darkMode={darkMode}
                            setDisableScroll={setDisableScroll}
                            spread={spread}
                            mode={mode}
                            toggleMode={toggleMode}
                        />
                    </ul>
                </nav>
            </div>
        </StyledHeader>
    );
}
