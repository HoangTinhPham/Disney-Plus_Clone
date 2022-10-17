import styled from 'styled-components';

function Viewers() {
    return ( 
        <Container>
            <Wrap>
                <img src="images/viewers-disney.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                    <source src="videos/1564674844-disney.mp4" type="video/mp4"></source>
                </video>
            </Wrap>
            <Wrap>
                <img src="images/viewers-marvel.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                    <source src="videos/1564676115-marvel.mp4" type="video/mp4"></source>
                </video>
            </Wrap>
            <Wrap>
                <img src="images/viewers-national.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                    <source src="videos/1564676296-national-geographic.mp4" type="video/mp4"></source>
                </video>
            </Wrap>
            <Wrap>
                <img src="images/viewers-pixar.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                    <source src="videos/1564676714-pixar.mp4" type="video/mp4"></source>
                </video>
            </Wrap>
            <Wrap>
                <img src="images/viewers-starwars.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                    <source src="videos/1608229455-star-wars.mp4" type="video/mp4"></source>
                </video>
            </Wrap>
            <Wrap>
                <img src="images/DSNY_STAR_LOGO_LIGHT_RGB.6685d68e.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} muted={true}>
                    <source src="videos/star_on_disney2021.mp4" type="video/mp4"></source>
                </video>
            </Wrap>
        </Container>
        
     );
}

export default Viewers;

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-template-columns: repeat(6, minmax(0,1fr));
    grid-gap: 25px;

    @media screen and (max-width: 991px) {
        grid-template-columns: repeat(3, minmax(0,1fr));
    }

    @media screen and (max-width: 550px) {
        grid-template-columns: repeat(2, minmax(0,1fr));
    }
`

const Wrap = styled.div`
    position: relative;
    border: 3px solid rgba(249 249 249 / 10%);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        opacity: 0;
        z-index: -1;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        cursor: pointer;
        video {
            opacity: 1;
        }
    }
`