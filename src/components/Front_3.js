import React from 'react'

export default function Front_3() {
  return (
    <div className='relative container-front-3 bg-cover bg-no-repeat bg-top'>
      <div className="p-10 flex flex-col justify-around items-center bg-[rgba(0,0,0,0.5)] absolute top-[50%] left-[65%] translate-x-[-65%] translate-y-[-50%] content w-[500px] h-[500px]">
        <h1 className='text-gray-50 text-4xl font-bold'>Fine Ingredients</h1>
        <img src={require("./images/Front_3/decoration.png")} alt="divider" />
        <p className='text-center text-gray-50'>If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes,  muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!</p>
        <div className="w-[400px] image-items flex justify-around items-center">
        <img src={require("./images/Front_3/item-1.png")} alt="item-logo" />
        <img src={require("./images/Front_3/item-2.png")} alt="item-logo" />
        <img src={require("./images/Front_3/item-3.png")} alt="item-logo" />
        </div>
      </div>
    </div>
  )
}
