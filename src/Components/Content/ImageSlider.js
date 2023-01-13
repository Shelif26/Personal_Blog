import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Awards() {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel2 {...settings}>
      <Wrap2>
        <img src={require("./ImagesCombo/NSSaward.JPG")} />
      </Wrap2>
      <Wrap2>
        <img src={require("./ImagesCombo/NSSaward2.JPG")} />
      </Wrap2>
      <Wrap2>
        <img src={require("./ImagesCombo/danceAward.png")} />
      </Wrap2>

      <Wrap2>
        <img src={require("./ImagesCombo/Dance.jpg")} />
      </Wrap2>
      <Wrap2>
        <img src={require("./ImagesCombo/collageAward.png")} />
      </Wrap2>
      <Wrap2>
        <img src={require("./ImagesCombo/CollageAward2.png")} />
      </Wrap2>
    </Carousel2>
  );
}

const Carousel2 = styled(Slider)`
  margin-top: 1%;
  width: 45%;
  display: flex;
`;

const Wrap2 = styled.div`
  img {
    border: 4px solid transparent;
    height: 30rem;
    width: 100%;
  }
  @media(
    max-width: 600px
  ){
    img{
      width:100%;
      height:100%
    }
    }
`;

function College() {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel3 {...settings}>
      <Wrap3>
        <img src={require("./ImagesCombo/ClassGroup1.jpeg")} />
      </Wrap3>
      <Wrap3>
        <img src={require("./ImagesCombo/ClassGroup2.jpeg")} />
      </Wrap3>
      <Wrap3>
        <img src={require("./ImagesCombo/DanceGroup1.jpg")} />
      </Wrap3>
      <Wrap3>
        <img src={require("./ImagesCombo/DanceGroup2.jpg")} />
      </Wrap3>
    </Carousel3>
  );
}

const Carousel3 = styled(Slider)`
  margin-top: 1%;
  width: 45%;
  display: flex;
  @media(
    max-width: 600px
  ){
    Carousel3{
      width:100%;}
    }
     
`;

const Wrap3 = styled.div`
  img {
    border: 4px solid transparent;
    height: 30rem;
    width: 100%;
  }
  @media(
    max-width: 600px
  ){
    img{
      width:100%;
      height:100%
    }
    }
`;

export { Awards, College };
