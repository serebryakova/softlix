import React, { FC } from "react";

interface ratingProps {
	rating: number;
}

const Rating: FC<ratingProps> = ({rating}) => {
   
	return <div className="top-1 left-2 absolute w-12 h-12 rounded-full bg-rose-600 flex items-center justify-center  shadow-md">
        <p className="text-white  font-bold text-md">{rating}</p>
    </div>;
};

export default Rating;
