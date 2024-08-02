'use client';
import '@/styles/style.css';

import React, { useEffect, useState } from 'react';
export const Hero = () => {
  // const textMarquee: string[] = ['Blackvnicorn', 'Software Developer |', 'Designs',
  //     'Brands', '| Frontend Development', ' | Software.']
  // const [displayText, setDisplayText] = useState(textMarquee[0])
  // // let displayText =
  // useEffect(() => {
  //     let currentIndex = 0;
  //     const marq = setInterval(() => {
  //         currentIndex = (currentIndex + 1) % textMarquee.length;
  //         setDisplayText(textMarquee[currentIndex]);
  //     }, 3000);
  //     return () => clearInterval(marq);
  // }, [displayText])
  return (
    <div className="hero">
      <div className="once-in p-8">
        <div>
          {/* className='[font-size:_clamp(2em,5vw,10em)]' */}
          <img
            className="w-14 cursor-pointer hover:sepia"
            src="https://res.cloudinary.com/beam-sensation/image/upload/v1720735262/portfolio/ag-logo_yy6lau.svg"
            alt="Oluwafemi Azeez Gafar's brand logo"
          />
        </div>
        <div className="mt-16 md:mt-[12em] md:flex">
          <div className="px-10 md:w-1/2 md:text-left">
            <h1 className="text-[4em]">Hi, I am</h1>
            <article>
              <div className="waviy">
                <span style={{ '--i': 1 } as React.CSSProperties}>A</span>
                <span style={{ '--i': 2 } as React.CSSProperties}>z</span>
                <span style={{ '--i': 3 } as React.CSSProperties}>e</span>
                <span style={{ '--i': 4 } as React.CSSProperties}>e</span>
                <span style={{ '--i': 5 } as React.CSSProperties}>z</span>
                <span> &nbsp; </span>
                <span style={{ '--i': 6 } as React.CSSProperties}>G</span>
                <span style={{ '--i': 7 } as React.CSSProperties}>a</span>
                <span style={{ '--i': 8 } as React.CSSProperties}>f</span>
                <span style={{ '--i': 9 } as React.CSSProperties}>a</span>
                <span style={{ '--i': 10 } as React.CSSProperties}>r</span>
                <span style={{ '--i': 11 } as React.CSSProperties}>.</span>
              </div>
            </article>

            <h6 className="md:w-90 text-[1.4em]">
              I am a result-oriented Frontend Developer with over 5 years of
              experience and proven knowledge of intuitive multi-user
              interfaces, web design, and mobile responsive web platform
              development. I aim to leverage my skills to successfully deliver
              software solutions and implementations for users.
            </h6>
          </div>
        </div>
        {/* <p className="hero-intro w-full inline-flex marquee-text" >{displayText}</p> */}
      </div>
      <div className="marquee">
        <div className="marquee-box-one">
          <div className="marquee-content-two">
            <h2 className="marquee-text">Software Developer |</h2>
            <h2 className="marquee-text"> Frontend Development |</h2>
            <h2 className="marquee-text">css |</h2>
            <h2 className="marquee-text">html |</h2>
            <h2 className="marquee-text">javascript |</h2>
            <h2 className="marquee-text">vue |</h2>
            <h2 className="marquee-text">nuxt |</h2>
            <h2 className="marquee-text">React |</h2>
            <h2 className="marquee-text">Next |</h2>
            <h2 className="marquee-text">Responsive |</h2>
            <h2 className="marquee-text">Design |</h2>
            <h2 className="marquee-text">Modern |</h2>
          </div>
          <div className="marquee-content-two"></div>
        </div>

        {/* <div className="marquee-box-two">
                    <div className="marquee-content-two">
                    ...
                    </div>
                </div> */}
      </div>
    </div>
  );
};
