import React from 'react'

const CallNumber = () => {
    return (
        <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
            <div className='w-full bg-white py-16 px-4'>
                <h3 className='text-orange-500  font-bold text-2xl text-center'>看診進度查詢Medical consultation progress</h3><br /><br /><br />
                <div className=' grid sm:grid-cols-1 lg:grid-cols-3  gap-2  px-40 py-4 justify-center'>
                    <div className='hover:scale-105 duration-700 flex flex-col justify-center'>
                        <div className='border-orange-500 border-8 bg-orange-200  w-[250px]   rounded-lg px-3 py-3 font-bold text-left'>
                            <h1 className='md:text-3xl sm:text-3xl text-2xl font-bold py-2'>超音波<span className="text-orange-600 text-xl">看診進度</span></h1>
                            <div className='border-orange-500 text-6xl font-bold text-left text-white'>19</div><br />
                            <p>
                                日期：/時段：
                            </p>
                            <p>
                                醫師：？
                            </p>
                            <p>
                                等待人數：？
                            </p>

                        </div>

                    </div>
                    <div className='hover:scale-105 duration-700 flex flex-col justify-center'>
                        <div className='border-orange-500 border-8 bg-orange-200  w-[250px] rounded-lg px-3 py-3 font-bold text-left'>
                            <h1 className='md:text-3xl sm:text-3xl text-2xl font-bold py-2'>胃鏡<span className="text-orange-600 text-xl">看診進度</span></h1>
                            <div className='border-orange-500 text-6xl font-bold text-left text-white'>23</div><br />
                            <p>
                                日期：/時段：
                            </p>
                            <p>
                                醫師：？
                            </p>
                            <p>
                                等待人數：？
                            </p>
                        </div>
                    </div>
                    <div className='hover:scale-105 duration-700 flex flex-col justify-center'>
                        <div className='border-orange-500 border-8 bg-orange-200  w-[250px] rounded-lg px-3 py-3 font-bold text-left'>
                            <h1 className='md:text-3xl sm:text-3xl text-2xl font-bold py-2'>大腸鏡<span className="text-orange-600">看診進度</span></h1>
                            <div className='border-orange-500 text-6xl font-bold text-left text-white'>66</div><br />
                            <p>
                                日期：/時段：
                            </p>
                            <p>
                                醫師：？
                            </p>
                            <p>
                                等待人數：？
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default CallNumber