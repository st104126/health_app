import React from 'react'
import Health_footer from './Health_footer'

const HealthEduPage_one = () => {
    return (
        <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
            <div className='w-full bg-white py-16 px-4'>
                <h3 className='text-orange-500  font-bold sm:text-3xl text-5xl py-3 text-center'>七大保養腸胃守則，預防消化不好「胃堵堵」～</h3>
                <img className='w-full h-full rounded-2xl bg-center bg-cover duration-300' src='https://res.cloudinary.com/dh8azaklf/image/upload/v1697865431/tips-for-heart-healthy-diet-after-angioplasty-alt-1440x810_kzgkrl.jpg' />
                <br />
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                    <div className='flex flex-col mx-3 justify-center'>
                        <h1 className='md:text-xs sm:text-3xs text-2xs font-bold py-2'>文章來源：<span className="text-orange-600">東元綜合醫院 潘盈臻 營養師</span></h1>
                        <p>
                            <h1 className='text-orange-800 font-bold'>1. 細嚼慢嚥、三餐定時</h1><br />
                            現代人生活忙碌壓力大，吃飯總是特別快，正餐往往吃不到10分鐘就結束，但這
                            樣吃進的食物都沒有經過充分的咀嚼，食物以大塊的形式進入腸胃道，腸胃需分泌更多的消化液
                            且需加強蠕動，造成負擔。建議用餐時間儘量在15分鐘以上，細嚼慢嚥(每口至少咬15-20下)，
                            並將用餐時間固定，讓腸胃道作用時間固定，不要經常出現過餓或太飽情形，形成腸胃道壓力。<br /><br />
                        </p>
                        <p>
                            <h1 className='text-orange-800 font-bold'>2. 不暴飲暴食、切勿大小餐</h1><br />
                            不少人因作息或上班原因，餐食份量及用餐次數都不固定，有人習慣不吃早餐或一天只吃一餐，
                            以致飲食上會有大小餐，份量差異很大的情況；或大夜班、假日放鬆關係，一天吃到5-6餐。
                            這樣容易使腸胃分泌消化液不固定，若在大餐下，腸胃因要消化過多食物或較多油脂，反應不
                            及容易感到不適；建議先將每日用餐時間及次數安排好，面對餐點份量多時，食物應適量攝取才是好的作法。<br /><br />
                        </p>
                        <p>
                            <h1 className='text-orange-800 font-bold'>3. 飯水分離、充分消化</h1><br />
                            不少人習慣在用餐時搭配湯、喝水或飲料，但當液體太多時容易使胃液被稀釋，若再加上飲食沒有
                            充分咀嚼，胃液只好分泌更多，以致胃酸過多，甚至逆流。建議腸胃消化不佳者，用餐時飯水分離
                            ，水、飲料應改在飯前或後1個小時飲用，若用餐時搭配湯，切勿超過200c.c.，外食的湯麵、粥品、羹麵或小
                            火鍋等也須注意用量。<br /><br />
                        </p>
                        <p>
                            <h1 className='text-orange-800 font-bold'>4. 腸胃不適時，避免刺激性食材</h1><br />
                            除了不抽菸、不喝酒外，都應避免刺激性的食材，如:咖啡、濃茶、辣椒等；發炎期間也需注意，不好消化
                            的食材，如:烤肉或鳳梨等質地太硬的食物、粽子或年糕等糯米類製品、油炸及肥肉類食物、冰品等。
                        </p>
                    </div>
                    <div className='flex flex-col my-8 mx-3'>
                        <p>
                            <h1 className='text-orange-800 font-bold'>5. 平時多補充有益腸胃道的食材</h1><br />
                            ✔ 含有益生菌的食物(發酵食物)：優酪乳、泡菜、納豆、味噌或益生菌保健品。
                            ✔ 富含膳食纖維的黏滑性食物：秋葵、山藥、菇類、海藻類。
                            ✔ 寡糖類食物，良好益生質有助好菌生長：洋蔥、黃豆、牛蒡、香蕉、蜂蜜。<br /><br />
                        </p>
                        <p>
                            <h1 className='text-orange-800 font-bold'>6. 飯後消化好幫手：消化酵素、水果醋</h1><br />
                            若是在用餐後容易感到消化不良「胃堵堵」，建議可在餐後補充消化酵素或喝點水果醋，大約50-100c.c.並稀釋飲用(不宜過量)，幫助食物分解，讓消化過程更順暢。<br /><br />
                        </p>
                        <p>
                            <h1 className='text-orange-800 font-bold'>7. 急性發炎期的溫和飲食</h1><br />
                            食材以質地軟、易消化且不含粗纖維或結締組織的固體食物為主，減低消化性潰瘍或胃炎者的負擔，讓消化道能有時間足夠休息。
                        </p>
                    </div>
                </div>
                <Health_footer />
            </div>

        </div>
    )
}

export default HealthEduPage_one