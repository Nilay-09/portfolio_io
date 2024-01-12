import React from 'react';

const MobileScreen = () => {


    return (
        <div className="grid grid-cols-1">
            <div
                className='mobileHome relative h-screen overflow-hidden flex   w-screen flex-col items-center justify-center text-center'
            >
                <div className="text-[#555770] text-2xl font-bold font-PT-Serif leading-42.56">
                    <span className='block'>Hi</span>
                    <span>It’s</span>
                    <span className="text-[#6698fa]">&nbsp;Nilay</span>
                </div>

                <div
                    className="mt-[1.5rem] max-w-[304px] text-center text-[#28293d] text-lg font-light font-['Poppins'] leading-[1.4319rem] overflow-hidden"
                >
                    A fullstack wizard who can design minimalist design and develop interactive web applications for you
                </div>


            </div>
        </div>
    );
};

export default MobileScreen;
