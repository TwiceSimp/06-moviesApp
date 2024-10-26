import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieMaper } from "../../../infrastructure/interfaces/mappers/movie.mapper";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import type { Movie } from "../../entities/movie.entity";




export const moviesPopularUseCase = async ( fetcher:HttpAdapter ):Promise<Movie[]> =>{



    try {

        const popular = await fetcher.get<MovieDBMoviesResponse>('/popular');

        return popular.results.map( MovieMaper.fromMovieDBResultToEntity );

        return [];

    } catch (error) {
        throw new Error('Error fetching movies - PopularUseCase');
    }

}
