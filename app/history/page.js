"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import './history.css'
import { IoIosSearch } from 'react-icons/io';
import { MdDeleteOutline } from "react-icons/md"
import { BsThreeDotsVertical } from "react-icons/bs";

const History = () => {
    const [search, setSearch] = useState('');
    var videos = [
        {
            img: 'https://i.ytimg.com/vi/R-sh3kfdHQ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWN06oLDSLM8--IsXokztj6t2aBw',
            profile: 'https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj',
            title: 'Aditya Rikhari – TERI YAAD (Video)',
            channel: 'Aditya Rikhari',
            key: 1,
            href: '/watch/2'
        }, {
            img: 'https://i.ytimg.com/vi/gLquCZ_TdSg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAumCQhw4UxGmT00F7L2n5my8GiEw',
            profile: 'https://yt3.ggpht.com/YjRMrycopvKaTuQfY43JzFDiSeIzna7-2Zj7G4EvqH1Bz_uHnELJkKIv9jVRZV8jSEiWpIDAoQ=s68-c-k-c0x00ffffff-no-rj',
            title: '4 Beautiful Nasheed || Slowed & reverb ||',
            channel: 'Happiness',
            key: 2,
            href: '/watch/2'
        }, {
            img: 'https://i.ytimg.com/vi/R-sh3kfdHQ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWN06oLDSLM8--IsXokztj6t2aBw',
            profile: 'https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj',
            title: 'Aditya Rikhari – TERI YAAD (Video)',
            channel: 'Aditya Rikhari',
            key: 3,
            href: '/watch/2'
        }, {
            img: 'https://i.ytimg.com/vi/R-sh3kfdHQ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWN06oLDSLM8--IsXokztj6t2aBw',
            profile: 'https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj',
            title: 'Aditya Rikhari – TERI YAAD (Video)',
            channel: 'Aditya Rikhari',
            key: 4,
            href: '/watch/2'
        }, {
            img: 'https://i.ytimg.com/vi/R-sh3kfdHQ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWN06oLDSLM8--IsXokztj6t2aBw',
            profile: 'https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj',
            title: 'Aditya Rikhari – TERI YAAD (Video)',
            channel: 'Aditya Rikhari',
            key: 5,
            href: '/watch/2'
        }, {
            img: 'https://i.ytimg.com/vi/R-sh3kfdHQ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWN06oLDSLM8--IsXokztj6t2aBw',
            profile: 'https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj',
            title: 'Aditya Rikhari – TERI YAAD (Video)',
            channel: 'Aditya Rikhari',
            key: 6,
            href: '/watch/2'
        }, {
            img: 'https://i.ytimg.com/vi/R-sh3kfdHQ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWN06oLDSLM8--IsXokztj6t2aBw',
            profile: 'https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj',
            title: 'Aditya Rikhari – TERI YAAD (Video)',
            channel: 'Aditya Rikhari',
            key: 7,
            href: '/watch/2'
        }, {
            img: 'https://i.ytimg.com/vi/R-sh3kfdHQ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWN06oLDSLM8--IsXokztj6t2aBw',
            profile: 'https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj',
            title: 'Aditya Rikhari – TERI YAAD (Video)',
            channel: 'Aditya Rikhari',
            key: 8,
            href: '/watch/2'
        }, {
            img: 'https://i.ytimg.com/vi/R-sh3kfdHQ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWN06oLDSLM8--IsXokztj6t2aBw',
            profile: 'https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj',
            title: 'Aditya Rikhari – TERI YAAD (Video)',
            channel: 'Aditya Rikhari',
            key: 9,
            href: '/watch/2'
        }, {
            img: 'https://i.ytimg.com/vi/R-sh3kfdHQ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWN06oLDSLM8--IsXokztj6t2aBw',
            profile: 'https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj',
            title: 'Aditya Rikhari – TERI YAAD (Video)',
            channel: 'Aditya Rikhari',
            key: 10,
            href: '/watch/2'
        }, {
            img: 'https://i.ytimg.com/vi/R-sh3kfdHQ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWN06oLDSLM8--IsXokztj6t2aBw',
            profile: 'https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj',
            title: 'Aditya Rikhari – TERI YAAD (Video)',
            channel: 'Aditya Rikhari',
            key: 11,
            href: '/watch/2'
        }, {
            img: 'https://i.ytimg.com/vi/R-sh3kfdHQ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWN06oLDSLM8--IsXokztj6t2aBw',
            profile: 'https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj',
            title: 'Aditya Rikhari – TERI YAAD (Video)',
            channel: 'Aditya Rikhari',
            key: 12,
            href: '/watch/2'
        },
    ];
    const handleSubmit = () => {
        e.preventDefault();
        alert()
    }
    return (
        <div className='container-fluid'>
            <div className="row my-2">
                <div className="col-md-12 mb-1">
                    <h3>History</h3>
                </div>
                <div className="col-md-12 mb-2 mobile-history-search-section">
                    <form className='d-flex' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Search History' value={search} onChange={(e) => setSearch(e.target.value)} className="form-control border-0 border-bottom" />
                        <button type="submit" className="btn border-0 nav-bg-color-hover">
                            <IoIosSearch className='mobile-mode-search-icon' size={22} />
                        </button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-7">
                    {videos.map((item) => (

                        <div className="row mb-3" key={item.key}>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Image src={item.img}
                                            width={557}
                                            height={100}
                                            alt='thumbnail image'
                                            className='img-fluid result-thumbnail' />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="title-stuff-wrapper">
                                            <div className='d-flex gap-2'>
                                                <div className='mobile-view-none'>
                                                    <Image src={item.profile}
                                                        width={40}
                                                        height={50}
                                                        alt='Profile pic'
                                                        className='img-fluid result-thumbnail-profile ' />
                                                </div>
                                                <div className='w-100'>
                                                    <p className='m-0 result-title'><b className='d-flex align-items-start justify-content-between'><span>{item.title}</span>  <span style={{ width: '2.5rem' }}>
                                                        <div className="notification nav-bg-color-hover">
                                                            <BsThreeDotsVertical size={20} />
                                                        </div>
                                                    </span></b></p>
                                                    <span className="text-mute form-text"> <span className="mobile-result-channel-name mobile-view-none">{item.channel} . </span> 10M Views . 1 years old</span>
                                                </div>
                                            </div>
                                            <div className="result-profile my-3">
                                                <Image src={item.profile}
                                                    width={40}
                                                    height={50}
                                                    alt='Profile pic'
                                                    className='img-fluid result-thumbnail-profile' />
                                                <span className="text-mute form-text">{item.channel}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                <div className="col-lg-5 sideSearchWrapper">
                    <div className="sideSearch">
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder='Search History' value={search} onChange={(e) => setSearch(e.target.value)} className="form-control border-0 border-bottom" />
                        </form>
                        <div className="d-flex align-items-center mt-3 deleteHistoryDiv gap-3">
                            <MdDeleteOutline size={20} />
                            <span><b>Delete all history</b></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History
