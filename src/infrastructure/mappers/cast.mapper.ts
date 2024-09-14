import { CastEntity } from "../../core/entities/cast.entity";
import { CastElement } from "../interfaces/movies-db.responses";

export class CastMapper {
    static fromCastElementToEntity(result: CastElement): CastEntity {
        return {
            id: result.id,
            name: result.name,
            character: result.character ? result.character : 'N/A',
            avatar: result.profile_path ? `https://image.tmdb.org/t/p/w500${result.profile_path}` : 'https://i.stack.imgur.com/l60Hf.png',
        }
    }
}