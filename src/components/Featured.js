import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Featured = () => {
    const sliders = [

        {
            url: 'https://res.cloudinary.com/dh8azaklf/image/upload/v1697766928/%E6%88%AA%E5%9C%96_2023-10-20_%E4%B8%8A%E5%8D%889.55.14_ocuez3.png'
        },
        {
            url: 'https://res.cloudinary.com/dh8azaklf/image/upload/v1697745095/%E6%88%AA%E5%9C%96_2023-10-20_%E4%B8%8A%E5%8D%883.36.35_bvpkoz.png'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        },

    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlider = () => {
        const isLastSlide = currentIndex === sliders.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const moveToNextSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className='max-w-[1540px] h-[500px] w-full m-auto py-4 px-4 relative group'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-300'
                style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
            ></div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={() => prevSlider()} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={() => nextSlider()} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {
                    sliders.map((sliderItems, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => moveToNextSlide(slideIndex)}
                            className='text-2xl cursor-pointer'>
                            <RxDotFilled />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Featured