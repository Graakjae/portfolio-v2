"use client";
import { useEffect } from "react";
import { StyledFrontSection, StyledPic, Wrapper } from "./styles";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <div>
            <StyledFrontSection id="top">
                <Wrapper>
                    <div>
                        <p
                            data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-easing="ease-in-out"
                            data-aos-duration="400"
                            data-aos-delay="50"
                        >
                            Hi, I'm
                        </p>
                        <h1
                            data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-easing="ease-in-out"
                            data-aos-duration="400"
                            data-aos-delay="100"
                        >
                            Frederik Graakjær
                        </h1>
                        <h2
                            data-aos-delay="300"
                            data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-easing="ease-in-out"
                            data-aos-duration="400"
                        >
                            Frontend developer
                        </h2>
                        <div>
                            <p
                                data-aos="fade-up"
                                data-aos-once="true"
                                data-aos-easing="ease-in-out"
                                data-aos-duration="400"
                                data-aos-delay="500"
                            >
                                I'm a frontend developer based in Aarhus, Denmark. I specialize in building responsive
                                and user-friendly websites. Take a look at my portfolio to see some examples of my work,
                                and feel free to get in touch to discuss your next project.
                            </p>
                        </div>
                    </div>
                    <StyledPic
                        data-aos="fade-up"
                        data-aos-once="true"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="400"
                        data-aos-delay="500"
                    >
                        <div className="wrapper">
                            <Image
                                width={500}
                                height={500}
                                data-aos-delay="600"
                                className="img"
                                src="/frederik-graakjaer.png"
                                alt="Frederik Graakjær"
                            />
                        </div>
                    </StyledPic>
                </Wrapper>
            </StyledFrontSection>
        </div>
    );
}
