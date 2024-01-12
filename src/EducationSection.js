import React from 'react'

export default function EducationSection() {
    return (

        <div className="px-[1.5rem] md:px-0  py-[50px] grid-container z-30 border-t-0 gap-y-6">

            {/* First Column */}
            <div className="text-slate-600 text-[28px] font-bold grid-row-2 ">Education</div>


            {/* 1st exp of 1,2 */}

            <div className="flex-col justify-start items-start gap-4 flex">

                <div className="text-slate-600 text-lg font-bold font-['Poppins']">Codehelp
                </div>

                <div className="text-slate-600 text-lg font-medium font-['Poppins']">MERN STACK Development MasterCamp
                </div>


                <div className="text-gray-400 text-lg font-medium font-['Poppins']">Jan 2023 - June 2023
                </div>


                <div className="text-gray-400 text-lg font-medium font-['Poppins']">Online
                </div>


            </div>
            {/* Fist desc */}
            <div className="max-w-[387px] text-slate-600 text-base font-light font-['Poppins']">I've Mastered full-stack development, demonstrating expertise in front-end and back-end through diverse projects, showcasing UI/UX design and robust server-side functionalities. </div>


            <div className="flex-col justify-start items-start gap-4 flex mt-10 md:mt-0">

                <div className="text-slate-600 text-lg font-bold font-['Poppins']">Yeshwantrao Chavan collage of engineering
                </div>

                <div className="text-slate-600 text-lg font-medium font-['Poppins']">BE: Computer Science
                </div>


                <div className="text-gray-400 text-lg font-medium font-['Poppins']">Jul 2020 - may 2023
                </div>


                <div className="text-gray-400 text-lg font-medium font-['Poppins']">Nagpur MH
                </div>

            </div>
            {/* Fist desc */}
            <div className="max-w-[387px] text-slate-600 text-base font-light font-['Poppins'] ">
                Thrived in college with an 8.2 CGPA, showcasing proficiency in diverse projects. Acquired comprehensive computer fundamentals throughout the journey. </div>


        </div>
    )
}
