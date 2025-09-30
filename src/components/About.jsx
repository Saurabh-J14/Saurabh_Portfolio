import React from 'react';

export default function About() {
  return (
    <div name='about' className=" font-sans about-page min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="about-me pb-8">
          <h2 className="text-4xl font-bold text-gray-500 border-b-4">About Me</h2>
          <p className="text-xl text-left">
            Hey there! I'm Saurabh, a passionate app developer who loves building cool and user-friendly applications and software solutions.
            My background in BCA helps me approach problems logically, while my strong foundation in logic building gives me the technical skills to bring ideas to life.
          </p>
        </div>

        <div className="expertise">
          <h2 className="text-4xl font-semibold mb-4">What I Can Do</h2>
          <ul className="list-disc space-y-2">
            <li className="text-xl">
              Expert in building application using the Kotiln,Swift,JAVA,Objective C(Android Studio,IOS SDK,Figma,MVVM,ROOM DB,UI/UX,Firebase). Think of it as a toolbox for building awesome web experiences!
            </li>
         
            <li className="text-xl">
              Skills in data structures and algorithms help me write efficient code that makes app run smoothly.
            </li>
          </ul>
        </div>

        <div className="projects">
          <h2 className="text-3xl font-semibold mb-4">Cool Projects I've Done</h2>
          <p className="text-xl text-left">
            I'm really proud of my work on the CHOR,HOOK on both android and IOS
            which I developed during my 1year industrial. 
            (Chor)This project helps people find Room Services,Housekeeping Hotel Management and many more UK Based
            (Hook) this app is used for find the middle Eastern Freelancrs in UAE cities. 
            You can check it out on PlayStore: <a href="https://apps.apple.com/in/app/chor/id6475621785" className="text-blue-400">CHOR</a>.
          </p>
        </div>

        <div className="learning">
          <h2 className="text-3xl font-semibold mb-4">Always Learning</h2>
          <p className="text-xl text-left">
            My math background gave me a strong foundation in problem-solving, and my BCA degree equipped me with the technical skills I need to be a web developer. But learning never stops! I take online courses and connect with other developers to keep my skills sharp and stay on top of the latest trends.
          </p>
        </div>
      </div>
    </div>
  );
}
