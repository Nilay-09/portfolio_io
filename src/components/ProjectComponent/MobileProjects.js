import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import ConvoBack from '../imgs/ProjectImgs/MobileImgs/ConvoBackBox.svg';
import ConvoMobile from '../imgs/ProjectImgs/MobileImgs/ConvoclubMob.svg';
import ConvoCard from '../imgs/ProjectImgs/MobileImgs/ConvoCard.svg';

import ABack from '../imgs/ProjectImgs/MobileImgs/BackBox.svg';
import AMobile from '../imgs/ProjectImgs/MobileImgs/Mob.svg';
import ACard from '../imgs/ProjectImgs/MobileImgs/Card.svg';

export default function MobileProjects() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease-in-out',
            offset: 200,
        });
    }, []);

    const renderProject = (url, images) => (
        <a href={url} target="_blank" rel="noopener noreferrer" className='hover:scale-105 transition-all duration-150 overflow-hidden'>
            <div className="flex relative w-full h-[500px] justify-center overflow-hidden" data-aos="fade-up">
                {images.map((image, index) => (
                    <img key={index} loading='lazy' src={image} alt={`I-${index}`} className="absolute h-full w-full" />
                ))}
            </div>
        </a>
    );

    return (
        <div className='flex justify-center items-center flex-wrap overflow-hidden relative mb-[1.25rem] w-screen px-[1.5rem]'>
            <div className="flex gap-2 justify-between flex-wrap mb-6 mt-[5rem]" id='projects'>
                <div className='pt-2 overflow-hidden ' id='dabba'>
                    <span className='text-[#28293d] font-a text-[2.75rem] font-bold leading-normal' id='splitText'> Recent Projects </span>
                </div>
                <div className="w-[60rem] text-[#555770] text-[18px] font-normal font-['Poppins'] text-justify">
                    In the last six months, I've had the opportunity to meet incredible people—founders, mentors, and passionate startup enthusiasts. Their wisdom and guidance have greatly influenced my journey.
                </div>
            </div>

            <div className="flex flex-col justify-center overflow-hidden w-screen ">
                {renderProject("https://convoclub-io.vercel.app/", [ ConvoBack, ConvoMobile, ConvoCard ])}
                {renderProject("https://artist-eight-lilac.vercel.app/", [ ABack, AMobile, ACard ])}
            </div>
        </div>
    );
}
