import React, { FC } from "react";
import { MovieItem } from "@/interfaces/movie.interface";
import GridItem from "./GridItem";

interface GridProps {
	movies: MovieItem[];
}

const Grid: FC<GridProps> = ({ movies }) => {
    
    
	return (
		<div className="w-fulll my-20  ">
			<p className="text-xl text-neutral-200 font-bold mb-5">Popular now</p>
			<div className="w-full grid grid-cols-2 lg:grid-cols-5 gap-3">
				{movies.map((movie: MovieItem) => {
					return <GridItem key={movie.id} movie={movie} />;
				})}
			</div>
		</div>
	);
};

export default Grid;
