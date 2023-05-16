import { MovieItem } from "@/interfaces/movie.interface";
import { useRouter } from "next/router";
import React, { FC, useCallback, useEffect, useState } from "react";
import Rating from "../ui/Rating";

interface MovieItemProps {
	movie: MovieItem;
}

const GridItem: FC<MovieItemProps> = ({ movie }) => {
	const router = useRouter();
	const [movieDate, setMovieDate] = useState<string | undefined>();
	 const [movieRating, setMovieRating] = useState<number>(0);

	useEffect(() => {
		if (movie.release_date) {
			const date = new Date(movie.release_date);
			const formattedDate = date.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});
			setMovieDate(formattedDate);
		}

		if (movie.vote_average) {
			setMovieRating(movie.vote_average);
		}
	}, [movie.release_date, movie.vote_average]);


	const onClick = useCallback(() => {
		return router.push(`/${movie.id}`)
	},[movie.id, router])

	return (
		<div onClick={onClick} className="relative bg-zinc-800 border-1 border-neutral-500 rounded-md shadow-md hover:shadow-lg hover:brightness-[75%]  hover:scale-[1.03] transition cursor-pointer">
			<div className="flex flex-col items-start justify-center">
				<img
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt="Poster"
					className="w-full h-200 rounded-md"
				/>
				<div className="p-5 flex flex-col items-start justify-start">
					<Rating rating={movieRating} />
					<p className="text-lg font-bold text-white text-start hover:text-rose-500 transition">
						{movie.original_title}
					</p>
					<hr />
					<p className="text-md text-rose-500 ">{movieDate}</p>
				</div>
			</div>
		</div>
	);
};

export default GridItem;
