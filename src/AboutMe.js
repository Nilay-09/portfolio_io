import React from 'react'
import ProfileImg from './components/imgs/AboutImg/profile.svg';
import AboutMeStrapBar from './AboutMeStrapBar';
import EducationSection from './EducationSection';
import Awards from './Awards';


export default function AboutMe() {
    return (
        <section className='w-screen flex justify-between items-center flex-col px-[7.5rem]' id='about'>

            {/* Profile Holder */}
            <div className="flex justify-around items-center">

                {/* Heading And About Holder */}
                <div className="flex flex-col lg:pt-[4.625rem]">

                    <section>
                        <div className="text-[#1c1c28] text-[2.75rem] font-bold font-a ">This Section </div>
                        <div className="text-[#3e7bFA] text-[2.75rem] font-bold font-a">Is Mine.</div>
                    </section>

                    <div className="max-w-[595px] text-[#1c1c28] text-[1rem] font-light font-['Poppins'] mt-[16px] text-justify">In a world where code is king and bugs are the unpredictable jesters, enter the scene: yours truly, the friendly neighborhood Full Stack Developer. Picture a story filled with caffeine-powered escapades, proudly rocking 'Error 404: Sleep Not Found' shirts like they're superhero capes.
                        <div className=""> From crafting eye-catching front-end wonders to wielding back-end magic, I'm the architect of a digital amusement park, ensuring rides glide as smoothly as virtual butter. In this ever-evolving tech saga, I'm the adaptable protagonist, navigating surprises like a Netflix series plot, where bugs are the unexpected guests, yet the show must go on.
                        </div>
                    </div>

                </div>

                {/* Image Holder */}
                <div className="flex justify-center items-center p-[1.375rem]">
                    <img loading='lazy' src={ProfileImg} alt="" />
                </div>
            </div>

            <AboutMeStrapBar />
            <EducationSection />
            <Awards />
        </section>
    )
}
