"use client";

import React, { Component } from "react";
import Slider from "react-slick";

import Image from "next/image";
import sliderClock from "@/images/sliderClock.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";

import Watch from "@/images/appleWatch.png";
import Iphone15 from "@/images/iphone15.png";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
    };
    return (
      <div className="carusel">
        <Slider {...settings}>
          <div className="def">
            <div className="sliderTrack">
              <div className="sliderTextBlock">
                <p>Best Deal Online</p>
                <h1>Iphone 15 Pro</h1>
                <span>UP to 80% OFF</span>
              </div>
              <div className="sliderImage">
                <Image alt="Iphone" width={212} height={220} src={Iphone15} />
              </div>
            </div>
          </div>
          <div className="def">
            <div className="sliderTrack">
              <div className="sliderTextBlock">
                <p>Best Deal Online on AppleWatches</p>
                <h1>Apple Watch series 3</h1>
                <span>UP to 80% OFF</span>
              </div>
              <div className="sliderImage">
                <Image alt="Iphone" width={308} height={310} src={Watch} />
              </div>
            </div>
          </div>
          <div className="def">
            <div className="sliderTrack">
              <div className="sliderTextBlock">
                <p>Best Deal Online on smart watches</p>
                <h1>Apple Watch series 4</h1>
                <span>UP to 80% OFF</span>
              </div>
              <div className="sliderImage">
                <Image
                  alt="Iphone"
                  width={268}
                  height={270}
                  src={sliderClock}
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
