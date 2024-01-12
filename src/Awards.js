import React from 'react'

export default function Awards() {
    return (

        <div className="px-[1.5rem] md:px-0  py-[50px] grid-container  z-30 border-t-0">

            {/* First Column */}
            <div className="text-slate-600 text-[28px] h-fit font-bold grid-row-2 ">Certification</div>


            {/* 1st exp of 1,2 */}

            <div className="flex-col justify-start items-start gap-4 flex">

                <div className="text-slate-600 text-lg font-bold font-['Poppins']">Meta Frontend developer Specialization
                </div>

                <div className="text-slate-600 text-lg font-medium font-['Poppins']">Meta
                </div>


                <div className="text-gray-400 text-lg font-medium font-['Poppins']">Aug 2023
                </div>


                <div className="text-gray-400 text-lg font-medium font-['Poppins']">Coursera
                </div>

            </div>
            {/* Fist desc */}
            <div className="max-w-[387px] text-slate-600 text-base font-light font-['Poppins']">This 9-course program prepares learners for an entry-level career as a
                front-end developer.
            </div>

            <div className="flex-col justify-start items-start gap-4 flex">

                <div className="text-slate-600 text-lg font-bold font-['Poppins']">Software Design and Architecture Specialization
                </div>

                <div className="text-slate-600 text-lg font-medium font-['Poppins']">University of Alberta
                </div>


                <div className="text-gray-400 text-lg font-medium font-['Poppins']">Sept 2023
                </div>

            </div>
            {/* Fist desc */}
            <div className="flex max-w-[387px] text-slate-600 text-base font-light font-['Poppins'] ">The recipient of this certificate has completed the Software Design and Architecture Specialization. This achievement required mastering knowledge and demonstrating applications of design principles,patterns, and architectures to create reusable and flexible software applications and systems.
            </div>


        </div>
    )
}
