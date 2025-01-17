import { FullMovie, Movie } from "../../core/entities/movie.entity";
import { Result, Genre, ParticularMovie } from '../interfaces/movies-db.responses';

export class MovieMapper {


    static fromMovieDBResultToEntity(result: Result): Movie {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseDate: new Date(result.release_date),
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,

        }
    }

    static fromFullMovieDBResultToEntity(movie: ParticularMovie): FullMovie {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            rating: movie.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            genres: movie.genres.map(g => g.name),
            duration: movie.runtime,
            budget: movie.budget,
            originalTitle: movie.original_title,
            ProductionCompany: movie.production_companies.map(p => p.name),
        }
    }
}