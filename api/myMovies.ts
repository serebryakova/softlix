
import axios from "axios";
import { MyMovieItem } from "@/interfaces/my-movie.interface";

export const getAll = async (): Promise<MyMovieItem[]> => {
	const response = await axios.get(
		"http://localhost:3000/api/myMovies"
	);
	return response.data.data;
};
export const getMovieById = async (id: number): Promise<MyMovieItem> => {
	const response = await axios.get(
		`http://localhost:3000/api/myMovies?id=${id}`
	);
	return response.data.data;
};



