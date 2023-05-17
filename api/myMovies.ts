
import axios from "axios";
import { MyMovieItem } from "@/interfaces/my-movie.interface";

export const getAll = async (): Promise<MyMovieItem[]> => {
	const response = await axios.get(
		"https://softlix-gules.vercel.app/api/myMovies"
	);
	return response.data.data;
};
export const getMovieById = async (id: number): Promise<MyMovieItem> => {
	const response = await axios.get(
		`https://softlix-gules.vercel.app/api/myMovies?id=${id}`
	);
	return response.data.data;
};



