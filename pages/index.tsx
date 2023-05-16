import Grid from "@/components/grid/Grid";
import Header from "@/components/Header";
import { MovieItem } from "@/interfaces/movie.interface";
import MetaHead from "@/meta/MetaHead";

import * as Api from "@/api";
import { NextPage } from "next";

interface HomeProps {
	items: MovieItem[];
}

const Home: NextPage<HomeProps> = ({ items }) => {

	return (
		<>
			<MetaHead title={"Softlix"} />
			<div className="container">
				<Header />
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
