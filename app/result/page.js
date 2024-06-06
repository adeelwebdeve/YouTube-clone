import Image from 'next/image'
import React from 'react'
import './result.css';
const Result = () => {
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
    return (
        <div className='container-fluid'>
            {videos.map((item)=>(
            
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
                                    <div>
                                        <p className='m-0 result-title'><b>{item.title}</b></p>
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
    )
}

export default Result
