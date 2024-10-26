import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieMaper } from "../../../infrastructure/interfaces/mappers/movie.mapper";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import type { Movie } from "../../entities/movie.entity";




export const moviesUpcomingUseCase = async ( fetcher:HttpAdapter ):Promise<Movie[]> =>{



    try {

        const upcoming = await fetcher.get<MovieDBMoviesResponse>('/upcoming');

        return upcoming.results.map( MovieMaper.fromMovieDBResultToEntity );

        return [];

    } catch (error) {
        throw new Error('Error fetching movies - UpcomingUseCase');
    }

}
