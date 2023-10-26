"use client";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ColorBox, Grid, ProjectHeader, StyledIcons, StyledPic, StyledProjects, Wrapper } from "./styles";
import { projectsData } from "@/lib/projects";
import { Icon } from "../../public/icons";
import { nanoid } from "nanoid";
import Link from "next/link";

export default function Projects() {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <StyledProjects id="Projects">
            <h2
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-easing="ease-in-out"
                data-aos-offset="300"
                data-aos-duration="400"
                data-aos-delay="50"
            >
                Projects
            </h2>
            <Grid>
                {projectsData.map(project => (
                    <div key={nanoid()}>
                        <Wrapper
                            data-aos="fade-up"
                            data-aos-once="true"
                            data-aos-easing="ease-in-out"
                            data-aos-offset="250"
                            data-aos-duration="401"
                            data-aos-delay={project.number}
                        >
                            <StyledPic>
                                <Link className="wrapper2" href={`/projects/${project.name}`}>
                                    <Image
                                        className="img"
                                        src={project.img[0]}
                                        alt={project.name}
                                        width={500}
                                        height={100}
                                    />
                                </Link>
                            </StyledPic>
                        </Wrapper>

                        <ProjectHeader>
                            <h3>{project.name}</h3>
                            <StyledIcons>
                                <li key={nanoid()}>
                                    <a href={project.urls.github} target="_blank">
                                        <Icon name="GitHub" className="w-[20px]" />
                                    </a>
                                    <a href={project.urls.website} target="_blank">
                                        <Icon name="External" />
                                    </a>
                                    {project.urls.Xd === undefined ? null : (
                                        <a href={project.urls.Xd} target="_blank">
                                            <Icon name="Xd" />
                                        </a>
                                    )}
                                </li>
                            </StyledIcons>
                        </ProjectHeader>
                    </div>
                ))}
            </Grid>
        </StyledProjects>
    );
}
