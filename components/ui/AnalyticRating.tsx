import React, { FC } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface RatingProps {
	rating: number;
}

const AnalyticRating: FC<RatingProps> = ({ rating }) => {
	const percentage = Math.round(rating * 10);

	const filledColor = "#E11D48";
	const emptyColor = "#CBD5E0";

	return (
		<div className="lg:ml-20 w-12 h-12 lg:w-20 lg:h-20" >
			<CircularProgressbar
				value={percentage}
				text={`${percentage}%`}
				styles={buildStyles({
					pathColor: filledColor,
					trailColor: emptyColor,
					textColor: filledColor,
				})}
			/>
		</div>
	);
};

export default AnalyticRating;
