import { useEffect, useState } from "react"
import { Movie } from '../../core/entities/movie.entity';
import { moviesDBFetcher } from "../../config/adapters/moviesDB.adapter";
import {
    MoviesNowPlayingUseCases,
    mostPopularMoviesUseCases,
    TopRatedMoviesUseCases,
    upComingMoviesUseCases
}
    from "../../core/use-cases/";


let actualPageMostPopular = 1;
let actualPageTopRated = 1;
let actualUpComming = 1;

export const UseMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [mostPopular, setMostPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upComing, setUpComing] = useState<Movie[]>([]);

    useEffect(() => {

        initialLoad();
    }, [])

    const mostPopularNextPage = async () => {
        console.log('hola');

        actualPageMostPopular++;
        const result = await mostPopularMoviesUseCases(moviesDBFetcher, { page: actualPageMostPopular });
        setMostPopular(prev => [...prev, ...result]);
    }

    const topRatedNextPage = async () => {
        actualPageTopRated++;
        const result = await TopRatedMoviesUseCases(moviesDBFetcher, { page: actualPageTopRated });
        setTopRated(prev => [...prev, ...result]);
    }

    const upCommingNextPage = async () => {
        actualUpComming++;
        const result = await TopRatedMoviesUseCases(moviesDBFetcher, { page: actualUpComming });
        setUpComing(prev => [...prev, ...result]);
    }

    const initialLoad = async () => {
        const nowPlayingResponse = MoviesNowPlayingUseCases(moviesDBFetcher);
        const mostPopularResponse = mostPopularMoviesUseCases(moviesDBFetcher);
        const topRatedResponse = TopRatedMoviesUseCases(moviesDBFetcher);
        const upComingResponse = upComingMoviesUseCases(moviesDBFetcher);

        const [
            nowPlaying,
            mostPopular,
            topRated,
            upComing,
        ] = await Promise.all([
            nowPlayingResponse,
            mostPopularResponse,
            topRatedResponse,
            upComingResponse
        ])

        setNowPlaying(nowPlaying);
        setMostPopular(mostPopular);
        setTopRated(topRated);
        setUpComing(upComing);
    }
    return {
        isLoading,
        nowPlaying,
        mostPopular,
        topRated,
        upComing,

        //metods

        mostPopularNextPage,
        topRatedNextPage,
        upCommingNextPage
    }
}