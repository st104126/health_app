import React, { useState } from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { categories } from "../data/data";
import { Link } from "react-router-dom";

const Health_footer = () => {
    const [foods, setFoods] = useState(categories);
    const fillterCat = (category) => {
        setFoods(
            categories.filter((item) => {
                return item.category === category;
            })
        );
    };
    return (
        <div className="max-w-[1520px] m-auto px-4 py-12">
            <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
                衛教文章
            </h1>
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
        </div >
    );
};

export default Health_footer;
