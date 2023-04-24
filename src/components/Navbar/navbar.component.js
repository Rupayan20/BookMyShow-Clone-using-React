import React from 'react';
import { BiChevronRight, BiSearch } from "react-icons/bi"

const NavSm = () => {
    return (
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold"> It All Starts Here </h3>
                <span className="text-gray-400 text-xs flex items-center">
                    Kolkata <BsChevronRight />
                </span>
            </div>
            <div className="w-8 h-8">
                <BiSearch className='w-full h-full' />
            </div>
        </div>
        </>
    )
};
const NavMd = () => {};
const NavLg = () => {};

const Navbar = () => {
return (
    <>
    <nav class="bg-navCol-800 px-4 py-2">
    <div className="md:hidden">{
        /* Mobile Screen */
        <NavSm />
    }</div>
    <div className="hidden lg:hidden md:flex">{
        /* Tablet Screen */
    }</div>
    <div className="hidden lg:flex">{
        /* Desktop Screen */
    }</div>
    </nav>
    </>
)

};

export default Navbar;
