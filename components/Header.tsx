import { MovieItem } from "@/interfaces/movie.interface";
import { useRouter } from "next/router";
import React, { FC, useEffect, useMemo, useState, useCallback } from "react";

import Input from "./ui/Input";

const Header: FC<{ movies: MovieItem[] }> = ({ movies }) => {
	const [searchIsNone, setSearchIsNone] = useState(false);
	const [searchText, setSearchText] = useState("");
	const [searchResults, setSearchResults] = useState<MovieItem[]>([]);
	const router = useRouter();

	const handleSearch = useCallback(
		(searchText: string) => {
			const filteredMovies = movies.filter((movie: MovieItem) =>
				movie.title.toLowerCase().includes(searchText.toLowerCase())
			);
			setSearchResults(filteredMovies);
			setSearchIsNone(filteredMovies.length === 0);
		},
		[movies]
	);

	useEffect(() => {
		if (searchText === "") {
			setSearchResults([]);
			setSearchIsNone(false);
		} else {
			handleSearch(searchText);
		}
	}, [searchText, movies, handleSearch]);

	return (
		<div className="w-full flex items-center justify-between relative">
			<div className="flex items-center">
				<p className="hidden lg:block text-xl lg:text-3xl text-rose-600 font-bold">
					Softlix
				</p>
				<img src="../images/logo.png" className="h-12 lg:ml-3" alt="" />
			</div>
			<div className="w-[70%]">
				<Input
					onChange={(e) => {
						setSearchText(e.target.value);
					}}
					placeholder={"Find a movie..."}
					value={searchText}
					type="text"
				/>
				{searchText && (
					<div className=" mt-5 absolute top-full left-0 w-full z-50 bg-white py-5 lg:rounded-md">
						{searchResults.map((movie: MovieItem) => (
							<div
								key={movie.id}
								className=" px-2 my-2 font-bold text-neutral-600 hover:text-white hover:bg-rose-600 cursor-pointer"
							>
								{/* Display movie information */}
								<p onClick={() => router.push(`/${movie.id}`)} className="">
									{movie.title}
								</p>
							</div>
						))}
						{searchIsNone && <p>No results found.</p>}
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
