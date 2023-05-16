import React, { useState } from "react";
// import logo from '../public/images/logo.png';
import Search from "./Search";
import Input from "./ui/Input";

const Header = () => {
	const [value, setValue] = useState("");

	return (
		<div className="w-full flex items-center justify-between">
			<div className="flex items-center">
				<p className="hidden lg:block text-xl lg:text-3xl text-rose-600 font-bold ">Softlix</p>
				<img src="../images/logo.png" className="h-12 lg:ml-3" alt="" />
			</div>
			<div className="w-[70%]">
				<Input
					onChange={(e) => {
						setValue(e.target.value);
					}}
					placeholder={"Find a movie..."}
					value={value}
					type="text"
				/>
			</div>
		</div>
	);
};

export default Header;
