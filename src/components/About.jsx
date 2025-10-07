import React from 'react';

export default function About() {
  return (
    <div name='about' className=" font-sans about-page min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-8 max-w-3xl About">
        <div className="about-me pb-8">
          <h2 className="text-6xl font-bold  border-b-4">About .</h2>
          <p className="text-xl text-left mt-4">
            I’m Saurabh, a passionate Mobile and Software Developer dedicated to creating intuitive, high-performance, and visually appealing applications. With a background in Computer Applications (BCA), I bring a strong foundation in logic building, problem-solving, and clean coding practices.
            I take pride in turning ideas into reliable digital solutions that offer seamless user experiences. Whether it’s Android, iOS, or cross-platform app development, I focus on delivering high-quality, scalable, and efficient products that make a real impact.
          </p>
        </div>

        <div className="expertise">
          <h2 className="text-4xl font-semibold mb-4">My Expertise</h2>
          <ul className="list-disc space-y-2">
            <li className="text-xl">
              Expert in building applications using Kotlin, Swift, Java, and Objective-C (Android Studio, iOS SDK, Figma, MVVM, Room DB, UI/UX design, Firebase). I leverage these tools and technologies to create high-quality, user-friendly, and efficient mobile applications.
            </li>
         
            <li className="text-xl">
              My strong foundation in data structures and algorithms enables me to write efficient, optimized code that ensures apps run smoothly and reliably.
            </li>
          </ul>
        </div>

        <div className="projects">
          <h2 className="text-4xl font-semibold mt-4 mb-4">Cool Projects I've Done</h2>
          <p className="text-xl text-left">
          CHOR and HOOK are two mobile applications I developed during my one-year industrial training for both Android and iOS platforms.  
          CHOR is a UK-based platform designed to help users find room services, housekeeping, hotel management, and related services with ease.  
          HOOK, on the other hand, connects freelancers across major UAE cities, helping clients find skilled Middle Eastern professionals quickly and efficiently.  
          You can check them out on PlayStore: <a href="https://play.google.com/store/apps/details?id=com.app.chor" className="text-blue-400">CHOR</a>, <a href="https://play.google.com/store/apps/details?id=com.hookUser" className="text-blue-400">HOOK</a>.
          </p>
        </div>

        <div className="learning">
          <h2 className="text-4xl font-semibold mt-4 mb-4">Always Learning</h2>
          <p className="text-xl text-left">
            My background in mathematics has given me a strong foundation in problem-solving and analytical thinking, while my BCA degree equipped me with the technical expertise to excel as an app developer. I believe learning never stops — I regularly take online courses, explore new frameworks and technologies, and connect with other developers to continuously enhance my skills and stay ahead of industry trends.
          </p>
        </div>
      </div>
    </div>
  );
}
