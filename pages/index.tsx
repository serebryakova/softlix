import Grid from "@/components/grid/Grid";
import Header from "@/components/Header";
import { MyMovieItem } from "@/interfaces/my-movie.interface"; // Updated import
import MetaHead from "@/meta/MetaHead";

import * as Api from "@/api";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { MovieItem } from "@/interfaces/movie.interface";
import MyMovieGrid from "@/components/my-movies/MyMovieGrid";

interface HomeProps {
	items: MovieItem[]; // Updated type
}

const Home: NextPage<HomeProps> = ({ items }) => {
	const [myMovies, setMyMovies] = useState<MyMovieItem[]>([]); // Updated type

	useEffect(() => {
		const fetchMyMovies = async () => {
			try {
				const myMoviesData = await Api.myMovies.getAll();
				setMyMovies(myMoviesData);
			} catch (error) {
				console.log(error);
			}
		};

		fetchMyMovies();
	}, []);

	return (
		<>
			<MetaHead title={"Softlix"} />
			<div className="container">
				<Header movies={items} />
				<MyMovieGrid myMovies={myMovies} />
				<Grid movies={items} />

				{/* <Footer  /> */}
			</div>
		</>
	);
};

export const getServerSideProps = async () => {
	try {
		const items = await Api.movies.getAll();

		return {
			props: {
				items,
			},
		};
	} catch (err) {
		console.log(err);
		return {
			props: { items: [] },
		};
	}
};

export default Home;
