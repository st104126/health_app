const Pageone = () => {
    return (
        <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
            <div className='w-full bg-white py-16 px-4'>
                <h3 className='text-orange-500  font-bold text-2xl text-center'>個人資訊Pesonal Info</h3>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                    <img className='h-[300px] mx-auto my-4' src='https://res.cloudinary.com/dh8azaklf/image/upload/v1697796629/Monkey-Selfie_zxtjfg.jpg' />
                    <div className='flex flex-col justify-center'>
                        <p className='text-orange-500 font-bold'></p>
                        <h1 className='md:text-3xl sm:text-3xl text-2xl font-bold py-2'>王小明，<span className="text-orange-600">你好</span></h1>
                        <p>
                            這裡是你的預約記錄
                        </p>
                        <p>
                            這裡是你的檢查記錄
                        </p>
                        <p>
                            這裡是你的病歷摘要影本
                        </p>
                        <button className='bg-black text-orange-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>預約檢查</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Pageone;
