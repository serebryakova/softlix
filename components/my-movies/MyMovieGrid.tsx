import React, { FC } from "react";
import { MyMovieItem } from "@/interfaces/my-movie.interface";
import MyMovieGridItem from "./MyMovieGridItem";

interface MyMovieGridProps {
	myMovies: MyMovieItem[];
}

const MyMovieGrid: FC<MyMovieGridProps> = ({ myMovies }) => {
	console.log(myMovies)
	return (
		<div className=" w-full my-20">
			<p className="text-xl text-neutral-200 font-bold mb-5">Available now</p>
			{myMovies && (
				<div className="w-full  grid grid-cols-2 lg:grid-cols-5 gap-3">
					{myMovies.map((myMovie: MyMovieItem) => (
						<MyMovieGridItem key={myMovie.id} myMovie={myMovie} />
					))}
				</div>
			)}
		</div>
	);
};

export default MyMovieGrid;
