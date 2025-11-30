import Image from 'next/image';
import { assets, toolsData } from '@/assets/assets';
import { infoList } from "@/assets/assets";
import React from 'react';

const About = () => {
  return (
    <div id='about' className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
            </div>
            <div className='flex-1'>
                <p className='mb-6'>I am a passionate data enthusiast with experience across data science, data engineering, and frontend development, currently expanding my skill set into full-stack development, Artificial Intelligence, and Large Language Models. My journey blends analytical thinking with creative problem-solving, and I’m actively working towards becoming an AI Engineer while continuing to build strong foundations across modern technology stacks.</p>
                
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
                            <Image src={icon} alt={title} className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>
                        </li>
                    ))}
                </ul>

                <h2 className="my-6 text-gray-700 font-Ovo text-xl sm:text-2xl md:text-3xl">Tools I use</h2>
                <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
                {toolsData.map((tool, index) => (
                    <li
                    key={index}
                    className="flex items-center justify-center 
                                w-14 sm:w-16 aspect-square 
                                border border-gray-400 
                                rounded-lg cursor-pointer 
                                p-2 sm:p-3 
                                hover:-translate-y-1 
                                transition duration-500 bg-white shadow-sm"
                    >
                    <Image
                        src={tool}
                        alt="Tool"
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                    </li>
                ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About