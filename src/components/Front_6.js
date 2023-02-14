import React from 'react'

export default function Front_6() {
    return (
        <div className='py-10 container-front-6 flex flex-wrap justify-center items-center'>
            <div className='images flex flex-wrap justify-around items-center w-[460px]'>
                <div className='w-[225px]'>
                    <img src={require("./images/Front_6/img1.png")} alt="img`" />

                </div>
                <div className='w-[225px]'>
                    <img src={require("./images/Front_6/img2.png")} alt="img`" />
                </div>
            </div>
            <div className='form flex flex-col flex-wrap justify-around items-center w-[450px] h-[500px]'>
                <h1 className='text-[#cc9900] font-bold text-4xl'>Just the right food</h1>
                <img src={require("./images/Front_6/decoration.png")} alt="" />
                <p className='text-center w-[450px]'>If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes,  muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!</p>
                <div className='w-full actual-form flex flex-wrap justify-between items-center'>
                    <div className=' flex flex-col h-[200px]'>
                        <div className='p-[10px]'>
                            <label htmlFor="name" className='text-[#cc9900] block'>Name</label>
                            <input placeholder='Your name' className='inputs' type="text" id='name' name='name' />
                        </div>
                        <div className='p-[10px]'>
                            <label htmlFor="name" className='text-[#cc9900] block'>Date</label>
                            <input placeholder='Your name' className='inputs' type="text" id='name' name='name' />
                        </div>
                    </div >
                    <div className=' flex flex-col h-[200px]'>
                        <div className='p-[10px]'>
                            <label htmlFor="name" className='text-[#cc9900] block'>Email</label>
                            <input placeholder='Your Email' className='inputs' type="text" id='name' name='name' />
                        </div>
                        <div className='p-[10px]'>
                            <label htmlFor="name" className='text-[#cc9900] block'>Party number</label>
                            <input placeholder='Your party number' className='inputs' type="text" id='name' name='name' />
                        </div>
                    </div >
                    
                </div>
                <button className='text-lg text-gray-50 bg-[#cc9900] px-14 py-1 '>Book Now!</button>

            </div>
            


        </div>
    )
}
