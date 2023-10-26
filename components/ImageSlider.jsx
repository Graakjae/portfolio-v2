"use client";
import Image from "next/image";
import Switch from "./switch/switch";
import { Heading, Midi, UL } from "@/theming/styles";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image2 } from "@/app/projects/[projects]/styles";

export default function ImageSlider({ project }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000
    };
    return (
        <div className="relative">
            <Slider {...settings} className="z-10 absolute ">
                {project.img.map(image => (
                    <div className="w-[750px] h-[480px]">
                        <Image
                            src={image}
                            alt={"project.name"}
                            width={1000}
                            height={850}
                            className="absolute w-[750px] h-[480px] rounded-t-[30px]"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
