import { useEffect, useState } from 'react';
import { moviesDBFetcher } from '../../config/adapters/moviesDB.adapter';
import { getMovieByIdUseCase } from '../../core/use-cases/movie/get-by-id';
import { FullMovie } from '../../core/entities/movie.entity';
import { getCastUseCase } from '../../core/use-cases/movie/get-cast.use-cases';
import { CastEntity } from '../../core/entities/cast.entity';
export const UseMovie = (movieId: number) => {
    const [MovieData, setMovieData] = useState<FullMovie>();
    const [CastData, setCastData] = useState<CastEntity[]>([]);
    const [Loading, setLoading] = useState(true);
    useEffect(() => {
        loadData();
    }, [])
    const loadData = async () => {
        setLoading(true);
        const dataPromise = getMovieByIdUseCase(moviesDBFetcher, movieId);
        const castPromise = getCastUseCase(moviesDBFetcher, movieId);

        const [data, cast] = await Promise.all([dataPromise, castPromise]);
        setMovieData(data);
        setCastData(cast);
        setLoading(false);
    }



    return {
        Loading,
        MovieData,
        CastData
    }
}