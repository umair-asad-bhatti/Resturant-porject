import React from 'react'

export default function Front_2() {
    return (
        <div className='container_front_2 bg-cover bg-center flex justify-center items-center'>
            <div className="content flex flex-wrap justify-around items-center">

                <div className="cock h-[450px] flex justify-around items-center flex-col">
                    <h1 className='text-[#cc9900] font-bold text-3xl'>Just the right food</h1>
                    <img src={require("./images/Front_2/decoration.png")} alt="" />
                    <p className='w-[400px] text-center'>If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes,  muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!</p>
                    <img className='ml-16' src={require("./images/Front_2/cook.png")} alt="" />
                </div>
                <div className="dish w-[400px] h-[400px]" >
                <img src={require("./images/Front_2/dish.png")} alt="dish plate here" />
                </div>
            </div>
        </div>
    )
}
