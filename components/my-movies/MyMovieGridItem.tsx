import { MyMovieItem } from '@/interfaces/my-movie.interface';
import { useRouter } from 'next/router';
import React, { FC, useCallback, useEffect, useState } from 'react';
import Rating from '../ui/Rating';

interface MyMovieGridItemProps {
	myMovie: MyMovieItem;
}

const MyMovieGridItem: FC<MyMovieGridItemProps> = ({ myMovie }) => {
	const router = useRouter();
	const [movieRating, setMovieRating] = useState<number>(0);

	useEffect(() => {
		if (myMovie?.rating) {
			setMovieRating(myMovie.rating);
		}
	}, [myMovie.rating]);

	const onClick = useCallback(() => {
		return router.push(`/watch/${myMovie.id}`);
	}, [myMovie.id, router]);
	return (
		<div
			onClick={onClick}
			className="relative bg-zinc-800 border-1 border-neutral-500 rounded-md shadow-md hover:shadow-lg hover:brightness-[75%]  hover:scale-[1.03] transition cursor-pointer"
		>
			<div className="flex flex-col items-start justify-center">
				<Rating rating={myMovie.rating} />
				<img
					src={myMovie.thumbnailUrl}
					alt="Poster"
					className="w-full h-[200px] rounded-md"
				/>
				<div className="p-5 flex flex-col items-start justify-start">
					<p className="text-lg font-bold text-white text-start hover:text-rose-500 transition">
						{myMovie.title}
					</p>
				</div>
			</div>
		</div>
	);
};

export default MyMovieGridItem;

