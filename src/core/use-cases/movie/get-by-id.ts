import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { ParticularMovie } from "../../../infrastructure/interfaces/movies-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapers";
import { FullMovie } from "../../entities/movie.entity";

export const getMovieByIdUseCase = async (fetcher: HttpAdapter, id: number): Promise<FullMovie> => {
    try {
        const movie = await fetcher.get<ParticularMovie>(`/${id}`, { params: { language: 'es' } });

        return MovieMapper.fromFullMovieDBResultToEntity(movie);
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies-Now playing');
    }
}