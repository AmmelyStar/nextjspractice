/* eslint-disable @next/next/no-html-link-for-pages */
'use client'
import React, {useEffect, useState} from 'react'

export default function Header() {
    const [selectedIndex1, setSelectedIndex1] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
            const scrollTop = window.pageXOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0)
        }
        window.addEventListener("scroll", handleScroll)

        return()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    },[])
    console.log(isScrolled)
  return (
    <>
     <header className={`${isScrolled ? "headerShow" :""} fixed top-0 z-50 transition-all duration-500`}
     style={{
        backgroundColor: isScrolled ? "#fff" : "transparent",
        boxShadow: isScrolled ? '#48afde -10px 25px 50px 10px' : ""
     }}>
        <nav className='invisible xl:visible xl:max-w-4xl 2xl:max-w-7xl mx-auto'>
            <ul className='flex font-recoletaBlack flex-row items-center h-24'> 
                <li className='group text-2xl relative font-bold mr-20'>
                    {selectedIndex1 === 0 ?(
                        <span className='menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
                    ):( 
                        <span className='menu-effect transform opacity-100 rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
                    )}
                    <a className={`menu-item ${selectedIndex1 === 0 ? "text-black" : ""}text-[#666d47] group-hover:text-black`}
                        href="/#home"
                        onClick={()=> setSelectedIndex1(0)}
                        >


                        Home</a>
                </li>

                <li className='group text-2xl relative font-bold mr-20'>
                    {selectedIndex1 === 1 ?(
                        <span className='menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
                    ):( 
                        <span className='menu-effect transform opacity-100 rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
                    )}
                    <a className={`menu-item ${selectedIndex1 === 0 ? "text-black" : ""}text-[#666d47] group-hover:text-black`}
                        href="/#portfolio"
                        onClick={()=> setSelectedIndex1(1)}
                        >


                        Portfolio</a>
                </li>

                <li className='group text-2xl relative font-bold mr-20'>
                    {selectedIndex1 === 2 ?(
                        <span className='menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
                    ):( 
                        <span className='menu-effect transform opacity-100 rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
                    )}
                    <a className={`menu-item ${selectedIndex1 === 0 ? "text-black" : ""}text-[#666d47] group-hover:text-black`}
                        href="/#about=me=components"
                        onClick={()=> setSelectedIndex1(2)}
                        >


                        About me</a>
                </li>

                <li className='group text-2xl relative font-bold mr-20'>
                    {selectedIndex1 === 3 ?(
                        <span className='menu-effect transform opacity-100 -rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
                    ):( 
                        <span className='menu-effect transform opacity-100 rotate-12 group-hover:-rotate-12 group-hover:opacity-100'></span>
                    )}
                    <a className={`menu-item ${selectedIndex1 === 0 ? "text-black" : ""}text-[#666d47] group-hover:text-black`}
                        href="/#contact"
                        onClick={()=> setSelectedIndex1(3)}
                        >


                        Contact</a>
                </li>
            </ul>
            
        </nav>
        </header>
    </>
   
  )
}
