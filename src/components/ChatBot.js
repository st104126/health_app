import React from 'react'

const ChatBot = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <h3 className='text-orange-500  font-bold text-2xl text-center'>專業衛教機器人諮詢 Health Education chatbot</h3>
            <div className='max-w-[1240px] mx-auto flex items-center grid md:grid-cols-2'>
                <img className='w-[563px] mx-auto my-4' src='https://res.cloudinary.com/dh8azaklf/image/upload/v1697770312/ImageForArticle_22457_16516788730473249_wgiah6.webp' />
                <div className='flex flex-col justify-center'>
                    <p className='text-orange-500 font-bold'></p>
                    <h1 className='md:text-3xl sm:text-3xl text-2xl font-bold py-2'>體驗前所未有的優質服務</h1>
                    <p>
                        透過我們的衛教機器人，您將能夠輕鬆地獲取內視鏡和超音波相關的衛教資訊。無論是了解這兩種檢查的流程、注意事項，還是了解相關疾病的相關知識，我們的衛教機器人都能提供詳細的解答。
                        此外，我們的衛教機器人還具備預約功能！您不再需要打電話或親自前往醫院，只需透過我們的衛教機器人，就能輕鬆建立或修改您的預約。我們的衛教機器人將根據您的需求為您安排最合適的時間和醫生，讓您的就醫體驗更加便利與舒適。
                        快來體驗我們的衛教機器人，讓我們一起創造更健康、更美好的未來！
                    </p>
                    <button className='hover:scale-105 duration-700 bg-black text-orange-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>立即體驗</button>
                </div>
            </div>
        </div>
    )
}

export default ChatBot