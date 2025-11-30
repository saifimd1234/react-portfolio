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

                <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>
                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index)=>(
                        <li className='flex items-center justify-center w-12 sm:2-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
    </div>
  )
}

export default About