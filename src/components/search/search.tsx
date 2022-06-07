import React from 'react'
import { IoSearchOutline } from 'react-icons/io5';

type SearchProps = {
	className?: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	name: string
	value: string
};

const SearchBox = React.forwardRef<HTMLInputElement, SearchProps>(
	({ className, onChange, name, value }, ref) => {
		
        
        return (
           <label htmlFor={name} className="flex items-center py-0.5 bg-gray-150 ps-2 rounded-md w-full">
                <span className="w-10 md:w-8 h-full flex py-1 flex-shrink-0 justify-center items-center cursor-pointer focus:outline-none">
                    <IoSearchOutline size={25}/>
                </span>
                <input type="search"
                    id={name}
                    ref={ref}
                    onChange={onChange}
                    value={value}
                    name={name}
                    placeholder="search phone number "
                    aria-label="Search"
					autoComplete="off"
                    className={className + " text-heading outline-none w-full h-6 lg:h-6 placeholder-heading bg-gray-350 text-sm lg:text-base"}
                />
            </label>
            
		);
	}
);



export default SearchBox
