import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/router";
import styles from '@/styles/carousel.module.css';
import ReactPlayer from "react-player";

export default function Carousel() {
    const router = useRouter();

    const settings = {
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        lazyLoad: 'ondemand',
      };
    
    return (
        <div className="relative w-full">
            <Slider {...settings} className={styles.slider}>
                        <Image
                            src="/img/carousel/1.png"
                            alt="image"
                            width={750}
                            height={200}
                            className="relative w-full object-cover"
                            loading="lazy"
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <Image
                            src="/img/carousel/1.png"
                            alt="image"
                            width={750}
                            height={200}
                            className="relative w-full object-cover"
                            loading="lazy"
                            style={{ width: '100%', height: 'auto' }}
                        />
            </Slider>
        </div>
    );
};