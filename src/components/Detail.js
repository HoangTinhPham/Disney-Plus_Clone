import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import db from "../Firebase";

function Detail() {
  const { movieId } = useParams();
  const [ movie, setMovie ] = useState();

  useEffect(() => {
    db.collection("Movies")
      .doc(movieId)
      .get()
      .then((doc) => {
        if(doc.exists) {
          setMovie(doc.data());
        } else {
          
        }
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  


  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.BackgroundImg} alt="" />
          </Background>
          <ImgTitle>
            <img src={movie.TitleImg} alt="" />
          </ImgTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="" />
              <span>play</span>
            </PlayButton>

            <TrailerButton>
              <img src="/images/play-icon-white.png" alt="" />
              <span>Trailer</span>
            </TrailerButton>

            <AddButton>
              <span>+</span>
            </AddButton>

            <GroupButton>
              <img src="/images/group-icon.png" alt="" />
            </GroupButton>
          </Controls>
          <SubTitle>{movie.Genres}</SubTitle>
          <Description>{movie.Description}</Description>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  margin-top: 70px;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 70px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (min-width: 280px) and (max-width: 991px){
      object-fit: fixed;
      object-position: center;
    }
  }
`;

const ImgTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 70px;

  @media screen and (max-width: 991px){
    width: 50vw;
  }

  @media screen and (max-width: 550px){
    width: 100vw;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  text-transform: uppercase;
  background-color: rgb(249, 249, 249);
  letter-spacing: 1.8px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  &:hover {
    background-color: rgba(109, 109, 110, 0.4);
  }
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0 0 0 / 60%);
  cursor: pointer;

  @media screen and (min-width: 280px) and (max-width: 991px){
    display: none;
  }

  span {
    font-size: 30px;
    color: #fff;
  }
`;
const GroupButton = styled(AddButton)`
  background-color: rgb(0 0 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;
