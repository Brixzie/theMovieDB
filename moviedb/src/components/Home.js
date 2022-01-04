import React, { useState, useEffect, math } from 'react'

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

//components
import HeroImage from './HeroImage';
import Grid from './Grid'
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';

//Hook
import { useHomeFetch } from './hooks/useHomeFetch';
//Image
import NoImage from '../images/no_image.jpg';

const Home = () => {

    const { state, loading, error} = useHomeFetch();
    console.log(state);

    return (
    <>
        {state.results[0] ?
        <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}
        />
        : null}
        <SearchBar />
        <Grid header='Popular Movies'>
            {console.log(state)}
            {console.log(state.results)}
            {//Sends a mapping of .title from state.results in as child props
            //.map
            // passing divs containing a movie title as child props
            }
            {state.results.map(movie =>(
                <Thumb
                  key={movie.id} //always needed when mapping through
                  clickable
                  image={
                    movie.poster_path
                      ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                      : NoImage
                  }
                  movieId={movie.id}
                />
                // <div key={movie.id}>{movie.title}</div>
            ))};
        </Grid>
        <Spinner />
    </>
    )
}

export default Home;
