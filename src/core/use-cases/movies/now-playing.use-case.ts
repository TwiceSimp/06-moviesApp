import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieMaper } from "../../../infrastructure/interfaces/mappers/movie.mapper";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import type { Movie } from "../../entities/movie.entity";




export const moviesNowPlayingUseCase = async ( fetcher:HttpAdapter ):Promise<Movie[]> =>{



    try {

        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

        return nowPlaying.results.map( MovieMaper.fromMovieDBResultToEntity );

        return [];

    } catch (error) {
        throw new Error('Error fetching movies - NowPlaying');
    }

}
