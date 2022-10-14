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
    const moviesList = useSelector(state => state.movie.movies)

    useEffect(() => {
        db.collection('Movies').onSnapshot((snapshot) => {
            // console.log(snapshot);
            let tempMovies = snapshot.docs.map((doc) => {
                return {id: doc.id,...doc.data()}
            })

            const action = setMovies(tempMovies);
            dispatch(action);

        })
    }, [dispatch])

    return ( 
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies moviesList={moviesList} />
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