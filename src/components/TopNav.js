//key in rafce
import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineClose, AiOutlineNotification, AiOutlineMessage, AiOutlineSetting } from 'react-icons/ai'
import { BsPerson, BsInfoCircle } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";

const TopNav = () => {
    const [sideNav, setSideNav] = useState(false)
    console.log(sideNav)
    return (
        <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
            {/* 左邊 */}
            <div className='flex items-center'>
                <div onClick={() => setSideNav(!sideNav)} className='cursor-pointer'>
                    <CiMenuKebab size={25} />
                </div>
                <Link to='/'>
                    <img src='https://res.cloudinary.com/dh8azaklf/image/upload/v1697805229/logo_hkbecv.png' className='w-[100px]' />

                </Link>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 text-orange-500'>Good<span className='text-orange-200'>Timing</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className=' bg-orange-700 text-white rounded-full p-2 text-bold'>不再</p>
                    <p className='p-2 text-bold'>等待</p>
                </div>
            </div>
            {/* 中間 */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                <input className='bg-transparent p-2 w-full focus:outline-none'
                    type='text'
                    placeholder='搜尋'
                />
            </div>
            {/* 右邊 */}
            <button className=' bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full'><BsPerson size={25} />登入</button>
            {/* 側欄 */}
            {sideNav ? (
                <div onClick={() => setSideNav(!sideNav)} className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0' />
            ) : ("")
            }
            <div className={
                sideNav
                    ? 'fixed top-0 left-0 w-[300px]  h-screen bg-orange-300 z-10 duration-200'
                    : 'fixed top-0 left-[-100%] w-[300px]  h-screen bg-orange-300 z-10 duration-200'}
            >
                <AiOutlineClose
                    onClick={() => setSideNav(!sideNav)}
                    size={25} className='absolute right-4 top-4 text-white cursor-pointer'
                />
                <Link to='/'><h2 className='text-2xl p-4 text-orange-500 font-bold'>GoodTiming</h2></Link>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-900'>
                        <li className='text-xl py-4 flex text-orange-600 hover:text-white font-bold'>
                            <Link to='Pageone'>
                                <BsPerson size={25} className='mr-4   flex rounded-full' />
                                個人資訊personal info
                            </Link>
                        </li>
                        <li className='text-xl py-4 flex  hover:text-white text-orange-600 font-bold'>
                            <Link to='CallNumber'><AiOutlineNotification size={25}
                                className='mr-4   rounded-full' />
                                即時診間叫號number announcement</Link>
                        </li>
                        <li className='text-xl py-4 hover:text-white flex text-orange-600 font-bold'>
                            <Link to='ChatGpt'><AiOutlineMessage size={25}
                                className='mr-4  rounded-full' />
                                衛教諮詢機器人Health consulting chatbot
                            </Link>
                        </li>
                        <li className='text-xl py-4 hover:text-white flex text-orange-600 font-bold'>
                            <Link to='HealthEduPage_one'>
                                <BsInfoCircle size={25}
                                    className='mr-4   rounded-full' />
                                衛教資訊Health info
                            </Link>
                        </li>
                        <li className='text-xl py-4 flex hover:text-white text-orange-600 font-bold'>
                            <AiOutlineSetting size={25}
                                className='mr-4   rounded-full' />
                            設定Setting
                        </li>
                    </ul>
                </nav>

            </div>
        </div >
    )
}

export default TopNav