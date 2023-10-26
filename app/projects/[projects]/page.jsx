"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { nanoid } from "nanoid";
import { projectsData } from "@/lib/projects.js";
import { Center, MacBook, Slider2, SliderContainer, StyledProject, ProjectHeader } from "./styles";
import React, { Component } from "react";
import ImageSlider from "@/components/ImageSlider";
import { StyledIcons } from "@/components/projects/styles";
import { Icon } from "@/public/icons";

export default function projects() {
    const [projects, setProjects] = useState([]);
    const [state, setState] = useState();
    const [desc, setDesc] = useState();
    const params = useParams();

    useEffect(() => {
        async function getProjects() {
            const projects = projectsData.filter(projects => projects.name === params.projects);
            setProjects(projects);
        }
        getProjects();
    }, []);

    return (
        <div>
            {projects.map(project => (
                <div>
                    <StyledProject key={nanoid()}>
                        <div className="flex justify-center">
                            <SliderContainer className="mx-auto max-w-[744px] h-[501px]">
                                <ImageSlider project={project} />
                            </SliderContainer>
                            <MacBook>
                                <Image
                                    src="/macbook.png"
                                    alt={project.name}
                                    width={1000}
                                    height={1000}
                                    className="w-[1000px] h-[501px]"
                                />
                            </MacBook>
                        </div>
                        <ProjectHeader>
                            <h2>{project.name}</h2>
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
                        <p>{project.description}</p>
                    </StyledProject>
                </div>
            ))}
        </div>
    );
}
