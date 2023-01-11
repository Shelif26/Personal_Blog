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
        <img src="https://lh3.googleusercontent.com/pw/AL9nZEW9gSiJZ-CRKRyi1TBhJhHUXbon0l94_fduZx6nkClZMQYxhoOlfsuJUxCIag9pRcAdkSnVBYngpG8gNDG1EjIGLugD_JqT7-15N-Tm8uCtqRL3kepZuBaanZlCDjECjMbQNN7CVFp-ypdVeR-O03Re6KaHEpJKQhSE5cRotjJAE3PHCeKvqYdwWPX8KQCLB8BnH0ufJGFSBhMov_Ef544iW_O-ab5YvzC4MXTpQ2uqHelcEmZe3pDpcUYYIttrMn15ayHeRBdjYxtjT4xN8nhhgngX7cDPXK09dY_KKa0tMw9GyF7azuBl4XlMBPTQ8QluVSet3JeJJL90wUXkin7PGPMJMeOmoO4JwAp2buPYyyYkiFGuTtypgOJG2MaUVnQOdmgbL9tLbb29wtV31aYOVX79I5ivl26CgTe832VuP-Y4BeIlabPom6HyP73ewtcUJvlSGtlpAjkA67NKVGcvbR4-GOsnUCOFNi7BlPtufPC40QgFWnzEAhIrpcf3fuoPpHZtUyWAUgdnjS8_kW9Zz2qHNLH9psSEH85CRZwOhoFR8ZfYq-kGie-DX5OpIY_1yr3yNnHI2z814JWq7juAXm3F6BeOSmnZbyZd-39oPt0JXAeNf8I-GRU-LlxVGmTTg6_vjsKxEX4MNHT2sx28X4a5Ri12MCXtgz3uKLuBvBFwzBo4QWQVIDIFLfAdDnWLWD-SrfDTEIfr5lgW1br7E6Pb7By8dSDMsJB9rpqkUt4NWlMI1mz8kgHyocNrfz8lkTgQPXG8srgGOMxBhji8spkY_O3WXa2jYu5Z5J-CAljDd_EpFF9dLbQKUE-Zx2IUMmcHOT-RFf7rJlWP3N2d-ERK5i6Rhu4ounb-cUew9QvTyYy3rfnMfgpfjWrNbyCSzaByvORqGOU48zkQ8sJCfrzC8Fphj_LW7GO6TUHUEMFq1J2ooYzMmJRgBYcqr2U=w404-h182-no?authuser=0" />
      </Wrap2>
      <Wrap2>
        <img src="https://img.freepik.com/free-vector/art-gallery-empty-room-with-white-walls-lamps_107791-1490.jpg?w=2000" />
      </Wrap2>
      <Wrap2>
        <img src="https://img.freepik.com/free-vector/art-gallery-empty-room-with-white-walls-lamps_107791-1490.jpg?w=2000" />
      </Wrap2>
    </Carousel2>
  );
}

const Carousel2 = styled(Slider)`
  margin-top: 30px;
  width: 50rem;
`;

const Wrap2 = styled.div`
  img {
    border: 4px solid transparent;
    height: 100%;
    width: 100%;
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
        <img src="DanceAward(1).png" />
      </Wrap3>
      <Wrap3>
        <img src="https://www.bankrate.com/2014/05/26174958/Reasons-to-go-to-college.jpg?auto=webp&optimize=high&crop=16:9" />
      </Wrap3>
      <Wrap3>
        <img src="https://www.bankrate.com/2014/05/26174958/Reasons-to-go-to-college.jpg?auto=webp&optimize=high&crop=16:9" />
      </Wrap3>
    </Carousel3>
  );
}

const Carousel3 = styled(Slider)`
  margin-top: 30px;
  width: 50rem;
`;

const Wrap3 = styled.div`
  img {
    border: 4px solid transparent;
    height: 100%;
    width: 100%;
  }
`;

export { Awards, College };
