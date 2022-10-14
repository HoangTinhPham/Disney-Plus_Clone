import styled from 'styled-components';


function Detail() {
    return ( 
        <Container>
            <Background>
                <img src="https://lumiere-a.akamaihd.net/v1/images/image_3d2369f3.jpeg?region=0,0,2048,878" alt=""/>
            </Background>
            <ImgTitle>
                <img src="https://lumiere-a.akamaihd.net/v1/images/image_059173ed.png?region=0,0,400,170" alt="" />
            </ImgTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt=""/>
                    <span>play</span>
                </PlayButton>
                    
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt=""/>
                    <span>Trailer</span>
                </TrailerButton>

                <AddButton>
                    <span>+</span>
                </AddButton>

                <GroupButton>
                    <img src="/images/group-icon.png" alt=""/>
                </GroupButton>
            </Controls>
            <SubTitle>
                Genre: Action-Adventure
            </SubTitle>
            <Description>
                Walt Disney Animation Studios’ original action-adventure “Strange World” journeys deep into an uncharted and treacherous land where fantastical creatures await the legendary Clades, a family of explorers whose differences threaten to topple their latest—and by far— most crucial mission. Helmed by Don Hall and co-director/writer Qui Nguyen, and produced by Roy Conli.
            </Description>
        </Container>
     );
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImgTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

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
`
const TrailerButton = styled(PlayButton)`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
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

    span {
        font-size: 30px;
        color: #fff;
    }
`
const GroupButton = styled(AddButton)`
    background-color: rgb(0 0 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
`