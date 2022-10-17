import { useEffect } from 'react';
import styled from 'styled-components';
import db from '../Firebase';
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';

function Home() {

    const dispatch = useDispatch();
    const moviesData = useSelector(state => state.movie);

    useEffect(() => {

        let populars = [];
        let hollywoods = [];
        let newTos = [];
        let kidsTvs = [];
        let originals = [];
        let trendings = [];

        db.collection('Movies').onSnapshot((snapshot) => {
            // console.log(snapshot);
            snapshot.docs.forEach((doc) => {
                
                switch (doc.data().type) {
                    case "popular":
                        populars = [...populars, {id: doc.id,...doc.data()}]
                        break;
                    case "hollywood":
                        hollywoods = [...hollywoods, {id: doc.id,...doc.data()}]
                        break;
                    case "newTo":
                        newTos = [...newTos, {id: doc.id,...doc.data()}]
                        break;
                    case "kidsTv":
                        kidsTvs = [...kidsTvs, {id: doc.id,...doc.data()}]
                        break;
                    case "original":
                        originals = [...originals, {id: doc.id,...doc.data()}]
                        break;
                    case "trending":
                        trendings = [...trendings, {id: doc.id,...doc.data()}]
                        break;                                                                                                
                    default:
                        break;
                }
            })

            const action = setMovies({
                popular: populars,
                hollywood: hollywoods,
                newTo: newTos,
                kidsTv: kidsTvs,
                original: originals,
                trending: trendings,
            });
            dispatch(action);

        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies moviesData={moviesData} />
        </Container>
     );
}

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    
    &:before {
        background: url("images/home-background.png") center center / cover no-repeat fixed;
        content:"";
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
    }
`;