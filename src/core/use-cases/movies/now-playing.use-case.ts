import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movies-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapers";
import { Movie } from "../../entities/movie.entity";

export const MoviesNowPlayingUseCases = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
        return nowPlaying.results.map(result => MovieMapper.fromMovieDBResultToEntity(result));
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies-Now playing');
    }
}