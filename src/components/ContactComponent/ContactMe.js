// import React, { useEffect } from 'react';
import React, { useEffect, useState } from 'react';

import 'aos/dist/aos.css';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {

    const contentArray = [
        { text: 'Caffeine', isStroked: false },
        { text: 'Pixel', isStroked: true },
        { text: 'Stack Overflow', isStroked: false },
        { text: 'Kernel', isStroked: true },
        { text: 'Dreams', isStroked: false },
        { text: 'Debug', isStroked: true },
        { text: 'API', isStroked: false },
        { text: 'Hack', isStroked: true },
    ];
    const contentArray2 = [
        { text: 'In', isStroked: false },
        { text: 'Prototype', isStroked: true },
        { text: 'Paradox', isStroked: false },
        { text: 'Sudo', isStroked: true },
        { text: 'Stories', isStroked: false },
        { text: 'Array', isStroked: true },
        { text: 'Adventure', isStroked: false },
        { text: 'Sarcasm', isStroked: true },
        { text: 'Caffeine', isStroked: false },
        { text: 'Pixel', isStroked: true },

    ];
    const contentArray3 = [
        { text: 'Recursive', isStroked: false },
        { text: 'Riddle', isStroked: true },
        { text: 'Rendering', isStroked: false },
        { text: 'Execution', isStroked: true },
        { text: 'Interpolation', isStroked: false },
        { text: 'Vector', isStroked: true },
        { text: 'Viewport', isStroked: false },
        { text: 'SVG', isStroked: true },
    ];
    const contentArray4 = [
        { text: 'Microservices', isStroked: false },
        { text: 'NPM', isStroked: true },
        { text: 'Markup', isStroked: false },
        { text: 'Framework', isStroked: true },
        { text: 'Canvas', isStroked: false },
        { text: 'Solana', isStroked: true },
        { text: 'Webpack', isStroked: false },
        { text: 'Promise', isStroked: true },
        { text: 'Caffeine', isStroked: false },
        { text: 'Pixel', isStroked: true },
    ];


    const [ imagesLoaded, setImagesLoaded ] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (imagesLoaded) {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.ContactStrip',
                    start: 'top 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to('.row-left', {
                marginLeft: '-30%',
            }, 'Wave');

            tl.to('.row-right', {
                marginLeft: '0%',
            }, 'Wave');

            return () => {
                // Cleanup if needed
                tl.kill(); // Kill the timeline to avoid potential memory leaks
            };
        }
    }, [ imagesLoaded ]);

    // Simulate image loading
    useEffect(() => {
        const simulateImageLoading = () => {
            // Simulate image loading time (replace this with your actual image loading logic)
            setTimeout(() => {
                setImagesLoaded(true);
            }, 2000); // Adjust the delay based on your loading time
        };

        simulateImageLoading();
    }, []);


    return (
        <div className='min-h-[37.5rem]'>

            <div className=" mt-2 relative w-[300%] pt-[5.4375rem] flex flex-col font-PT-Serif ContactStrip rotate-30 overflow-hidden ">

                {/* Row 1 */}
                <div className=" w-full py-4  row-left font-bold text-[#3e7bfa] overflow-hidden OnlyStrip ">

                    {contentArray.map((item, index) => (
                        <span
                            key={index}
                            className={`${item.isStroked ? 'stroked' : 'NotStroked'} text-[8vw] leading-[3rem] uppercase mr-4`} title={item.text}
                        >
                            {item.text}
                        </span>
                    ))}

                </div>


                {/* Row 2 */}
                <div className=" py-4 w-full  row-right font-bold text-[#6698FA] overflow-hidden OnlyStrip">

                    {contentArray2.map((item, index) => (
                        <span
                            key={index}
                            className={`${item.isStroked ? 'stroked' : 'NotStroked'} text-[8vw] leading-[3rem] uppercase mr-4`}
                        >
                            {item.text}
                        </span>
                    ))}

                </div>

                {/* Row 3 */}
                <div className=" py-4 w-full row-left font-bold text-[#6698FA] overflow-hidden OnlyStrip">

                    {contentArray3.map((item, index) => (
                        <span
                            key={index}
                            className={`${item.isStroked ? 'stroked' : 'NotStroked'} text-[8vw] leading-[3rem] uppercase mr-4`}
                        >
                            {item.text}
                        </span>
                    ))}

                </div>

                {/* Row 4 */}
                <div className=" py-4 w-full row-right font-bold text-[#6698FA] overflow-hidden OnlyStrip">

                    {contentArray4.map((item, index) => (
                        <span
                            key={index}
                            className={`${item.isStroked ? 'stroked' : 'NotStroked'} text-[8vw] leading-[3rem] uppercase mr-4`}
                        >
                            {item.text}
                        </span>
                    ))}

                </div>

            </div >
        </div>
    );
}

export default ContactMe;
