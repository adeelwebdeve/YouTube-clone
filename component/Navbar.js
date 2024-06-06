"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { HiMiniBars3 as Bar } from "react-icons/hi2";
import {IoIosSearch} from 'react-icons/io'
import {BiSolidMicrophone , BiSolidUserCircle} from 'react-icons/bi'
import {AiOutlineVideoCameraAdd} from 'react-icons/ai'
import {IoNotificationsOutline} from 'react-icons/io5'
import { useRouter } from 'next/navigation';



const Navbar = () => {
    const [searchVal , setSearchVal]=useState('');
    const route = useRouter()
    const handleSearch = (e)=>{
        e.preventDefault();
        if (searchVal !='') {
            // const search = {
            //     pathname: '/result',
            //     query: { search: searchVal }
            //   };
              route.push('/result');
        }
    }
  return (
    <div className='container-fluid  fixed-top bg-white'>
      <nav className='navbar'>
        <div className="start-section">
            <Bar className='navbar-bar-toggle' style={{cursor:'pointer'}} size={25}/>
            <Image src="/yt_logo.png" className='img-fluid' alt="logo" width="110" height="20" />
        </div>
        <div className="middle-section">
            <form onSubmit={handleSearch}>
            <div className='d-flex align-items-center'>
                <input type="text" placeholder='Search' value={searchVal} onChange={(e)=> setSearchVal(e.target.value)} className="form-control search-input" />
                <button type="submit" className="search-icon">
                    <IoIosSearch type='submit' size={22}/>
                </button>
            </div>
            </form>
            <div className="voice nav-bg-color">
                <BiSolidMicrophone size={22} />
            </div>
        </div>
        <div className="end-section">
            <div className="create-video nav-bg-color-hover">
                <AiOutlineVideoCameraAdd size={22} />
            </div>
            <div className="notification nav-bg-color-hover">
                <IoNotificationsOutline size={22} />
            </div>
            <div className="user-profile nav-bg-color-hover">
                <BiSolidUserCircle className='navbar-profile' size={26} />
                <IoIosSearch className='mobile-mode-search-icon' size={22}/>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
