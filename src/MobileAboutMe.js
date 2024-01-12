import React from 'react'

import ProfileImg from './components/imgs/AboutImg/profile.svg'
// eslint-disable-next-line 
import AboutMeStrapBar from './AboutMeStrapBar';
import EducationSection from './EducationSection';
import Awards from './Awards';

export default function MobileAboutMe() {
    return (
        <>
            <div className='w-screen flex justify-center items-center flex-col' id='about'>

                {/* Profile Holder */}
                <div className="mt-[3vh] w-4/5 flex justify-around items-center flex-col lg:flex-row">

                    {/* Heading And About Holder */}
                    <div className="flex flex-col lg:pt-[4.625rem]">

                        <section>
                            <div className="text-[#555770] text-[44px] font-bold font-a ">This Section </div>
                            <div className="text-[#6698FA] text-[44px] font-bold font-a">Is Mine.</div>
                        </section>

                        <img loading='lazy' src={ProfileImg} alt="" />
                        <div className="max-w-[595px] text-[#555770] text-[1.125rem] font-normal font-['Poppins'] mt-[16px]  text-justify "><span className='font-bold '>Hello, I'm Nilay,</span><div className="mt-4">A recent B.Tech. graduate and full-stack developer from the Tiger Capital of India. Passionate about AI interactions, system development, and crafting engaging web applications. Currently, I'm involved in the world of AI and ML models, applying my analytical abilities to enhance web applications and master the complexities of network integration.
                        </div>
                        </div>

                    </div>


                </div>

            </div>
            <AboutMeStrapBar />
            <EducationSection />
            <Awards />
        </>
    )
}
