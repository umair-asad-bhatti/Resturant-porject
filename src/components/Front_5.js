import React from 'react'

export default function Front_5() {
  return (
    <div className='container-front-5 bg-cover bg-no-repeat bg-top flex justify-center items-center'>
      <div className="p-10 flex flex-col justify-around items-center bg-[rgba(0,0,0,0.8)]  content w-[500px] h-[400px]">
        <h1 className='text-gray-50 text-4xl font-bold'>Guest Reviews</h1>
        <img src={require("./images/Front_3/decoration.png")} alt="divider" />
        <p className='text-center text-gray-50'>If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes,  muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!</p>
       
      </div>
    </div>
  )
}
