import React, { useEffect, useState } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import { MyMovieItem } from "@/interfaces/my-movie.interface";
import * as Api from '@/api'


const Watch = () => {
    const [movie, setMovie] = useState<MyMovieItem | null>(null);
	const router = useRouter();
	const { movieId } = router.query;
 useEffect(() => {
		async function getMovie() {
			if (movieId) {
				const response = await Api.myMovies.getMovieById(Number(movieId));
				setMovie(response );
			}
		}
		getMovie();
 }, [movieId]);


	return (
		<div className="h-screen w-screen bg-black">
			<nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
				<AiFillCaretLeft
					onClick={() => router.push("/")}
					className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition"
				/>
				<p className="text-white text-1xl md:text-3xl font-bold">
					<span className="font-light">Watching:</span> {movie?.title}
				</p>
			</nav>
			<video
				className="h-full w-full"
				autoPlay
				controls
				src={movie?.videoUrl}
			></video>
		</div>
	);
};

export default Watch;
