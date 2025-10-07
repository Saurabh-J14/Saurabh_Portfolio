import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

export default function SocialLink() {
    const links = [
        {
            id: 1,
            child: (
                <>LinkedIn <FaLinkedin size={30} /></>
            ),
            href: "https://www.linkedin.com/in/saurabh-jaiswal-300b13218",
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>Github <FaGithub size={30} /></>
            ),
            href: "https://github.com/Saurabh-J14"
        },
        {
            id: 3,
            child: (
                <>Mail <HiOutlineMail size={30} /></>
            ),
           href: "https://mail.google.com/mail/?view=cm&fs=1&to=sgrj414@gmail.com"
        },

        {
            id: 7,
            child: (
                <>Resume <BsFillPersonLinesFill size={30} /></>
            ),
            href: "/Saurabh_Portfoli.pdf",
            style: 'rounded-br-md',
            download: true
        },
    ]

    return (
        <div className=' font-sans hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-400 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] ${style}`}
                    >
                        <a
                            href={href}
                            className='flex justify-between items-center w-full text-white'
                            rel="noreferrer"
                            download={download}
                            target='_blank'
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
