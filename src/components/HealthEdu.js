import React, { useState } from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { healthinfo } from "../data/data";
import { Link } from "react-router-dom";

const HealthEdu = () => {
    const [foods, setFoods] = useState(healthinfo);
    const fillterCat = (category) => {
        setFoods(
            healthinfo.filter((item) => {
                return item.category === category;
            })
        );
    };
    return (
        <div className="max-w-[1520px] m-auto px-4 py-12">
            <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
                衛教文章
            </h1>
            <div className="flex flex-col lg:flex-row justify-center">
                <div className="flex justify-center md:justify-center">
                    <button
                        onClick={() => setFoods(healthinfo)}
                        className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700">
                        全部
                    </button>
                    <button
                        onClick={() => fillterCat("colonoscopy")}
                        className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700">
                        大腸鏡
                    </button>
                    <button
                        onClick={() => fillterCat("gastroscopy")}
                        className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700">
                        胃鏡
                    </button>
                    <button
                        onClick={() => fillterCat("ultrasound")}
                        className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700">
                        超音波
                    </button>
                    <button
                        onClick={() => fillterCat("dietadvice")}
                        className="m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700">
                        飲食起居建議
                    </button>
                </div>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6  py-4">
                {foods.map((item) => (
                    <Link to={item.url}>
                        <div
                            key={item.id}
                            className="border-none hover:scale-105 duration-300"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-[200px] object-cover rounded-lg"
                            />
                            <div className="flex justify-between py-2 px-2">
                                <p className="font-bold ">{item.name}</p>
                                <p className="bg-orange-700 h-18 w-20 rounded-full -mt-10 text-white py-4 px-2 border-8 border-white font-bold">
                                    {" "}
                                    {item.price}
                                </p>
                            </div>

                            <div className="pl-2 py-4 -mt-7">
                                <p className="flex items-center text-indigo-600">
                                    View More
                                    <ArrowSmRightIcon className="w-5 ml-2" />
                                </p>
                            </div>
                        </div>

                    </Link>

                ))}
            </div>
        </div>
    );
};

export default HealthEdu;
