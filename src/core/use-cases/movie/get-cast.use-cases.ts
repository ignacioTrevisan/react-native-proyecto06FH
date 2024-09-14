import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { Cast } from "../../../infrastructure/interfaces/movies-db.responses";
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper";
import { CastEntity } from "../../entities/cast.entity";

export const getCastUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<CastEntity[]> => {
    try {
        const { cast } = await fetcher.get<Cast>(`${movieId}/credits`);
        const actores = cast.map(c => CastMapper.fromCastElementToEntity(c));
        return actores;
    } catch (error) {
        throw new Error(`Error trying get cast for movieId: ${movieId}`)
    }
}