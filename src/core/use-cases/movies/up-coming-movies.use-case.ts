import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movies-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapers";
import { Movie } from "../../entities/movie.entity";


interface Props {
    page?: number
}
export const upComingMoviesUseCases = async (fetcher: HttpAdapter, { page }: Props = { page: 1 }): Promise<Movie[]> => {
    try {
        const topRated = await fetcher.get<NowPlayingResponse>('/upcoming', { params: { page } });
        return topRated.results.map(result => MovieMapper.fromMovieDBResultToEntity(result));
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching: most-Popular');
    }
}