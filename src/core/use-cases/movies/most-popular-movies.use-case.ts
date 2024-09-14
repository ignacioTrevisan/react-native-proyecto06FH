import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { FilterMoviesReponse, NowPlayingResponse } from "../../../infrastructure/interfaces/movies-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapers";
import { Movie } from "../../entities/movie.entity";


interface params {
    page?: number;

}
const paramsXDefecto = {
    page: 1,

}
export const mostPopularMoviesUseCases = async (fetcher: HttpAdapter, params: params = paramsXDefecto): Promise<Movie[]> => {
    try {
        const mostPupular = await fetcher.get<FilterMoviesReponse>('/popular', { params: { page: params.page } });

        return mostPupular.results.map(result => MovieMapper.fromMovieDBResultToEntity(result));
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching: most-Popular');
    }
}