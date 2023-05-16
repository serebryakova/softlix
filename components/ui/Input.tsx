interface InputProps {
	placeholder?: string;
	value?: string;
	type?: string;
	disabled?: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
	placeholder,
	value,
	type = "text",
	onChange,
	disabled,
}) => {
	return (
		<div className="w-full">
		
			<input
				onChange={onChange}
				value={value}
				placeholder={placeholder}
				type={type}
				className="
          w-full
          px-3
		  py-2
		  lg:py-3
          text-lg 
          bg-white
          border-2
          border-neutral-800 
          rounded-md
          outline-none
          text-neutral-500
          focus:border-rose-600
          focus:border-2
          transition
         
        "
			/>
		</div>
	);
};

export default Input;
