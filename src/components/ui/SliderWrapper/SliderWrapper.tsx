/* eslint-disable import/no-extraneous-dependencies */
"use client";
import React, { FC, useRef } from "react";

import Slider from "react-slick";
import { Button } from "antd";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider-wrapper.scss";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

interface ISliderWrapperProps {
  children: any;
  className?: any;
}

type CustomSlider = Slider & {
  slickPrev: () => void;
  slickNext: () => void;
};

const SliderWrapper: FC<ISliderWrapperProps> = ({ className, children }) => {
  const sliderRef = useRef<CustomSlider>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    ref: sliderRef,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          dots: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 479,
        settings: {
          arrows: true,
          dots: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className={className}>
        {children}
      </Slider>

      <div className="custom_arrow">
        <Button
          className="custom_arrow_prev"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <ArrowLeftOutlined />
        </Button>

        <Button
          className="custom_arrow_next"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <ArrowRightOutlined />
        </Button>
      </div>
    </>
  );
};

export default SliderWrapper;
