import axios from "axios";
import { MovieItem } from "@/interfaces/movie.interface";

export const getAll = async (): Promise<MovieItem[]> => {
	const response = await axios.get(
		"https://api.themoviedb.org/3/movie/popular?api_key=a07e5680835e67e12f5b8f142842699d"
	);
	return response.data.results;
};

export const getMovieById = async (id: number): Promise<MovieItem> => {
	const response = await axios.get(
		`https://api.themoviedb.org/3/movie/${id}?api_key=a07e5680835e67e12f5b8f142842699d`
	);
	return response.data;
};
