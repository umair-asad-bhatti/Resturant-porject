import React from 'react'

export default function Front_7() {
  return (
    <div>
      <div className="h-[300px] container_front_t flex justify-around items-center bg-black">
          <div className='w-[300px] h-[200px] flex flex-col justify-between items-center' >
              <h1 className='text-white text-2xl'>About us</h1>
              <img src={require("./images/Front-7/decoration.png")} alt="" />
              <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eum fugit consectetur saepe esse veritatis maxime blanditiis cupiditate veniam eaque quisquam, exercitationem</p>
          </div>

          <div className='w-[300px] h-[200px] flex flex-col justify-between items-center' >
              <h1 className='text-white text-2xl'>Opening Hours</h1>
              <img src={require("./images/Front-7/decoration.png")} alt="" />
              <p className='text-white text-center'><span className='font-bold'>mon-thu: </span>7:00Am - 8:00Pm</p>
              <p className='text-white text-center'><span className='font-bold'>mon-thu: </span>7:00Am - 10:00Pm</p>
          </div>

          <div className='w-[300px] h-[200px] flex flex-col justify-between items-center' >
              <h1 className='text-white text-2xl'>Our Location</h1>
              <img src={require("./images/Front-7/decoration.png")} alt="" />
              <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eum fugit consectetur saepe esse veritatis maxime blanditiis cupiditate veniam eaque quisquam, exercitationem</p>
          </div>
          
      </div>
    </div>
  )
}
