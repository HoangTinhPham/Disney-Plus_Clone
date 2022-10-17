import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Movies({ moviesData }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 991, settings: { slidesToShow: 3 } },
      { breakpoint: 767, settings: { slidesToShow: 2 } },
      { breakpoint: 425, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Container>
      {moviesData && (
        <>
          <h4>ORIGINALS</h4>
          <Carousel {...settings}>
            {moviesData.original &&
              moviesData.original.map((movie, index) => {
                return (
                  <Wrap key={index}>
                    <Link to={`/detail/${movie.id}`}>
                      <img src={movie.CardImg} alt={movie.Title} />
                    </Link>
                  </Wrap>
                );
              })}
          </Carousel>

          <h4>NEW TO DISNEY</h4>
          <Carousel {...settings}>
            {moviesData.newTo &&
              moviesData.newTo.map((movie, index) => {
                return (
                  <Wrap key={index}>
                    <Link to={`/detail/${movie.id}`}>
                      <img src={movie.CardImg} alt={movie.Title} />
                    </Link>
                  </Wrap>
                );
              })}
          </Carousel>

          <h4>TRENDING</h4>
          <Carousel {...settings}>
            {moviesData.trending &&
              moviesData.trending.map((movie, index) => {
                return (
                  <Wrap key={index}>
                    <Link to={`/detail/${movie.id}`}>
                      <img src={movie.CardImg} alt={movie.Title} />
                    </Link>
                  </Wrap>
                );
              })}
          </Carousel>

          <h4>HOLLYWOOD ON DISNEY</h4>
          <Carousel {...settings}>
            {moviesData.hollywood &&
              moviesData.hollywood.map((movie, index) => {
                return (
                  <Wrap key={index}>
                    <Link to={`/detail/${movie.id}`}>
                      <img src={movie.CardImg} alt={movie.Title} />
                    </Link>
                  </Wrap>
                );
              })}
          </Carousel>

          <h4>DISNEY FOR KIDS</h4>
          <Carousel {...settings}>
            {moviesData.kidsTv &&
              moviesData.kidsTv.map((movie, index) => {
                return (
                  <Wrap key={index}>
                    <Link to={`/detail/${movie.id}`}>
                      <img src={movie.CardImg} alt={movie.Title} />
                    </Link>
                  </Wrap>
                );
              })}
          </Carousel>

          <h4>POPULAR ON DISNEY</h4>
          <Carousel {...settings}>
            {moviesData.popular &&
              moviesData.popular.map((movie, index) => {
                return (
                  <Wrap key={index}>
                    <Link to={`/detail/${movie.id}`}>
                      <img src={movie.CardImg} alt={movie.Title} />
                    </Link>
                  </Wrap>
                );
              })}
          </Carousel>
        </>
      )}
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  margin-bottom: 30px;
`;

const Carousel = styled(Slider)`
  margin-top: 20px;
  padding: 0 -8px;

  .slick-list {
    overflow: visible;
  }

  .slick-slide {
    padding: 0 8px;
  }

  button {
    z-index: 1;

    &:before {
      opacity: 0;
    }

    &:hover {
      button::before {
        opacity: 1;
      }
    }
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
