import React, { FC } from "react";
import { MovieItem } from "@/interfaces/movie.interface";
import GridItem from "./GridItem";

interface GridProps {
	movies: MovieItem[];
}

const Grid: FC<GridProps> = ({ movies }) => {
    
    
	return (
		<div className="w-full my-20 grid grid-cols-2 lg:grid-cols-5 gap-3">
			{
                movies.map((movie: MovieItem ) => {
                    return(
                        <GridItem key={movie.id} movie={movie} />
                    )
                })
            }
		</div>
	);
};

export default Grid;
