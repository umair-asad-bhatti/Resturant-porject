import React from 'react'
// !import for icons
import { FaTwitter } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"

export default function Front_1() {
    return (
        <div className="container_front_1 bg-cover bg-center">
            <nav className='flex justify-around items-center w-screen' >
                <div className="logo">
                    <img src={require("./images/Front_1/Logo.png")} alt="Logo" />
                </div>
                <ul className='text-gray-100 ul flex flex-wrap justify-around items-center  w-[50%]'>
                    <li className='font-bold text-lg'>Home</li>
                    <li className='font-bold text-lg'>About</li>
                    <li className='font-bold text-lg'>Ingredients</li>
                    <li className='font-bold text-lg'>menu</li>
                    <li className='font-bold text-lg'>Review</li>
                    <li className='font-bold text-lg'>Reservation</li>
                </ul>
                <div className="w-20 socials flex justify-between items-center">
                    <FaTwitter className="icons text-orange-400" />
                    <FaYoutube className="icons text-orange-400" />
                    <FaFacebook className="icons text-orange-400" />
                </div>
            </nav>
            <div  className="mid flex flex-col justify-around items-center h-[400px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div className='front-heading '>
                    <h1 style={{wordSpacing:"10px",fontFamily:"Modern No. 20"}} className='call-out w-[800px] leading-normal font-bold text-center text-gray-50 text-7xl text-bold'>the right ingredients for the right food</h1>

                </div>
                <div className="decoration">
                    <img className='text-gray-50 w-[230px] h-[37px]'  src={require("./images/Front_1/Decoration.png")} alt="" />
                </div>
                <div className="buttons flex justify-between items-center w-[30rem]">
                    <button className='text-xl text-gray-50 bg-[rgba(0,0,0,0.5)] px-14 py-3'>Book a Table</button>
                    <button className='text-xl text-gray-50 bg-[rgba(255,255,255,0.2)] px-14 py-3'>See the menu</button>
                </div>
            </div>
        </div>

    )
}