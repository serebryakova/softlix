import { Genre, MovieItem } from "@/interfaces/movie.interface";
import MetaHead from "@/meta/MetaHead";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import * as Api from "@/api";
import { count } from "console";
import AnalyticRating from "@/components/ui/AnalyticRating";

interface MovieDetails {
	movie: MovieItem;
}

const MoviePage = () => {
	const router = useRouter();
	const [movie, setMovie] = useState<MovieDetails | null>(null);
    const [movieReleaseDate, setMovieReleaseDate] = useState <string>();

	const { movieId } = router.query;

	useEffect(() => {
		async function getMovieDetails() {
			if (movieId) {
				const response = await Api.movies.getMovieById(Number(movieId));
				setMovie({ movie: response });
			}
		}
		getMovieDetails();
	}, [movieId]);



	const movieYear = movie?.movie.release_date
		? new Date(movie.movie.release_date).getFullYear()
		: null;


       useEffect(() => {
         if (movie) {
						const date = new Date(movie?.movie.release_date);
						const formattedDate = date.toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						});
						setMovieReleaseDate(formattedDate);
					}
       },[movie, movieReleaseDate])

	return (
		<>
			<MetaHead title="Movie" />
			<div className="container">
				<div className="w-full flex flex-col lg:flex-row  justify-between">
					<img
						src={`https://image.tmdb.org/t/p/w400/${movie?.movie.poster_path}`}
						className="w-full  lg:w-[500px] h-[400px] rounded-md shadow-lg"
						alt=""
					/>
					<div className=" lg:ml-10 w-full flex flex-col p-3">
						<h1 className="text-xl lg:text-3xl text-white font-bold mb-5">
							{movie?.movie.original_title}{" "}
							<span className="font-thin">({movieYear})</span>
						</h1>
						<div className="flex items-center my-3">
							<p className="text-md text-neutral-500">{movieReleaseDate}</p>
							<span className="text-md text-neutral-400">
								({movie?.movie.status})
							</span>
						</div>
						<a
							href={movie?.movie.homepage}
							target="_blank"
							className="text-lg text-pink-200 mb-3"
						>
							{movie?.movie.homepage}
						</a>
						<div className="flex items-center mb-3">
							<p className="text-lg text-white font-semibold">Genres:</p>
							{movie?.movie.genres.map((genre: Genre, index) => (
								<p key={index} className="ml-2 text-md text-pink-500">
									{genre.name}
								</p>
							))}
						</div>
						<div className="flex items-center mb-3">
							<p className="text-lg text-white font-semibold">Duration:</p>
							<p className="ml-2 text-md text-pink-500">
								{movie?.movie.runtime} minutes
							</p>
						</div>
						<div className=" flex flex-col mb-3">
							<p className="text-lg text-white font-semibold">Overview:</p>
							<p className="text-md text-neutral-400">
								{movie?.movie.overview}
							</p>
						</div>
						
						<div className="flex items-center">
							<div className="flex flex-col">
								<p className="text-lg text-white font-semibold">
									Production Companies:
								</p>
								{movie?.movie.production_companies.map((company, index) => (
									<p key={index} className="ml-2 text-md text-pink-500">
										{company.name}
									</p>
								))}
							</div>
							<div className="flex flex-col  ml-5">
								<p className="text-lg text-white font-semibold">
									Production Countries:
								</p>
								{movie?.movie.production_countries.map((country, index) => (
									<p key={index} className="ml-2 text-md text-pink-500">
										{country.name}
									</p>
								))}
							</div>
							{movie?.movie.vote_average && (
								<AnalyticRating rating={movie.movie.vote_average} />
							)}
						</div>
						
					</div>
				</div>
			</div>
		</>
	);
};

export default MoviePage;
