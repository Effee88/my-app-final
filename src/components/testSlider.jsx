
import React, { Component } from "react";
import Slider from "react-slick";

export default class TestSlider extends Component {
  render() {
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img width={1400} height={600} src="./img/1.png" alt=""/>
          </div>
          <div>
          <img width={1400} height={600} src="./img/2.png" alt=""/>
          </div>
          <div>
          <img width={1400} height={600} src="./img/3.png" alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}