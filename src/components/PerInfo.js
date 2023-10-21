import React from 'react'

const PerInfo = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <h3 className='text-orange-500  font-bold text-2xl text-center'>個人資訊 Personal Info</h3>
            <div className='max-w-[1240px] flex items-center mx-auto grid md:grid-cols-2'>
                <div className='flex flex-col justify-center'>
                    <p className='text-orange-500 font-bold'></p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>為您打造的個人醫療資訊管理平台，讓您的醫療資訊一手掌握！</h1>
                    <p>
                        您不僅能夠查看和管理當前已建立的預約，還能瀏覽過去的檢查紀錄。這意味著您的醫療歷史將被完整保存，方便您隨時回顧和了解自己的健康狀況。
                        最重要的是，我們推出了數位化的病歷影本申請功能！您無需再用紙本的方式向醫院申請病歷影本，所有事物都能在這個平台上輕鬆完成。這不僅為您節省了時間和精力，也是我們對環保的一份貢獻。
                        快來加入我們的個人醫療資訊管理平台，讓我們一同打造更加便利、高效的醫療服務體驗！
                    </p>
                    <button className='hover:scale-105 duration-700 bg-black text-orange-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>立即體驗</button>
                </div>
                <img className=' w-[563px] mx-auto my-4' src='https://res.cloudinary.com/dh8azaklf/image/upload/v1697770059/6c1d3b4eb821ad53899a662f077b0ec2_mxfylv.jpg' />
            </div>
        </div>
    )
}

export default PerInfo