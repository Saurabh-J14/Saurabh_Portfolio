import React, { useEffect, useState } from 'react';
import WeatherApp from '../assets/portfolio/ch.jpg';
import spotifyClone from '../assets/portfolio/sls.jpg';
import home from '../assets/portfolio/ho.jpg';
import portfolio from '../assets/portfolio/portfolio.png'
import chatapp from '../assets/portfolio/chatapp.png'
import { LiaEyeSolid } from "react-icons/lia";
import wanderlust from '../assets/portfolio/wanderlust.png'
import clock from '../assets/portfolio/clock.png'
import webpage from '../assets/portfolio/webpage.png'
import { TypewriterEffect, TypewriterEffectSmooth } from './ui/typewriter-effect';
import { Typewriter } from 'react-simple-typewriter';

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: spotifyClone,
      title: "CHOR(ios)"
      ,
      link: "https://apps.apple.com/in/app/chor/id6475621785",
      tech: "XCode | Swift | MVVM | UIKit | Swift UI | Xcode | iOS Framework | Firebase",
      color: "green"
    },
    {
      id: 2,
      src: WeatherApp,
      title: "HOOK(ios)"
      ,
      link: "https://apps.apple.com/in/app/hookmena/id6503940447",
      tech: "XCode | Swift | MVVM | UIKit | Swift UI | Xcode | iOS Framework | Firebase",
      color: "green"
    },
    {
      id: 3,
      src: home,
      title: "SalesNet(Android)"
      ,
      link: "https://play.google.com/store/apps/details?id=com.techlabs.salesnet",
      tech: "Kotlin | Xml | Room Database | Firebase | Rest Api | MVVM",
      color: "green"
    },
    // {
    //   id: 4,
    //   src: portfolio,
    //   title: "My Portfolio"

    //   ,
    //   link:"https://github.com/appusrivastva/Apoorva_portfolio/tree/main/apoorva-portfolio",
    //     tech:"HTML | CSS |javaScript | React | Tailwind CSS ",
    //     color:"green"
    // },
    {
      id: 4,
      src: spotifyClone,
      title: "CHOR(android)"
      ,
      link: "https://play.google.com/store/apps/details?id=com.app.chor",
      tech: "Kotlin| Xml | Room Database | Firebase | Rest Api| MVVM",
      color: "green"
    },
    {
      id: 5,
      src: WeatherApp,
      title: "HOOK(android)",
      link: "https://play.google.com/store/apps/details?id=com.hookUser",
      tech: "Kotlin| Xml | Room Database | Firebase | Rest Api| MVVM",
      color: "green"
    },

    // {
    //   id: 9,
    //   src: home,
    //   title: "Accommodation Finder",
    //   link:"",
    //     tech:""
    // },
  ];

 const lines = [
    "Discover some of my featured projects.",
    "Craft beautiful UI designs.",
    "Work with Firebase, RoomDB, and APIs.",
    "Deliver apps for both Android and iOS.",
    "Bring your ideas to life seamlessly.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      name='portfolio'
      className=' font-sans bg-gradient-to-b from-black to-gray-800 w-full text-white flex items-center justify-center'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen'>
        <div className='pb-8'>
          {/* <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p> */}
         <div className="py-6 text-center">
      <span className="text-3xl max-w-screen-lg sm:text-2xl md:text-3xl font-semibold">
        <Typewriter
          words={lines}
          loop={0} 
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </span>
    </div>


        </div>

        {/* cards */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {portfolios.map(({ id, src, title, link, tech, color }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img
                src={src}
                alt=""
                className='rounded-md duration-200 hover:scale-105'
              />
              <div className='flex flex-col items-center justify-center p-4'>
                <p className='w-full text-center py-2'>{title}</p>
                <p className='w-full text-center py-2'>Tech Stack:  {tech}</p>
                <div className='w-full text-center py-2 flex items-center justify-center'>
                  <span>Status:</span>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    marginLeft: '8px',
                    backgroundColor: color,
                    border: '2px solid black'
                  }}></div>
                </div>


                <div className='w-full px-6 py-2 my-2 duration-200 hover:scale-105' >

                  <a
                    href={link}
                    className='flex justify-between items-center w-full text-white'


                    target='_blank' rel="noreferrer"
                  >

                    App Store <LiaEyeSolid />
                  </a>

                </div>




              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
