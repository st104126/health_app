import React from "react";
import { GiMedicalDrip } from 'react-icons/gi';

const Footer = () => {
    return (
        <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
            <p className="sticky top-[-20px]">This is react sticky footer!!</p>
            <div className="py-16  flex justify-center  text-gray-300">
                <div className="lg:col-span-2  justify-center mt-6">
                    <div>
                        <h1 className="w-full text-3xl font-bold text-orange-500 px-4">GoodTiming</h1>
                    </div>
                    <br />
                    <div>
                        <ul className="flex">
                            <li className="py-2 sm:px-3 lg:px-4 text-xs font-bold text-[#9b9b9b] hover:text-white hover:bg-orange-500 hover:rounded-full flex">個人資訊</li>
                            <li className="py-2 sm:px-3 lg:px-4 text-xs font-bold text-[#9b9b9b] hover:text-white hover:bg-orange-500 hover:rounded-full flex">即時診間叫號</li>
                            <li className="py-2 sm:px-3 lg:px-4 text-xs font-bold text-[#9b9b9b] hover:text-white hover:bg-orange-500 hover:rounded-full flex">衛教諮詢機器人</li>
                            <li className="py-2 sm:px-3 lg:px-4 text-xs font-bold text-[#9b9b9b] hover:text-white hover:bg-orange-500 hover:rounded-full flex" >衛教資訊</li>
                            <li className="py-2 sm:px-3 lg:px-4 text-xs font-bold text-[#9b9b9b] hover:text-white hover:bg-orange-500 hover:rounded-full flex">設定</li>
                        </ul>
                        <div className="lg:col-span-2 justify-center items-center mt-5 pb-0">
                            <h1 className="w-full text-sm text-[#9b9b9b] sm:px-2 lg:px-4">四層相似所有,未經授權,禁止轉載©</h1>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Footer;
