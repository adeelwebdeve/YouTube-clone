import VideoCard from '@/component/VideoCard';
import Link from 'next/link';
import React from 'react'

const Subscription = () => {

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
      <div className="row mb-3 my-2">
        <div className="col-md-12">
          <div className="channel_sections_wrapper">
            <Link className='me-3' href={'/'}>
              <img src="https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj" className='img-fluid subcription_channel_image' alt="channel_profile_pic" />
            </Link>
            <Link className='me-3' href={'/'}>
              <img src="https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj" className='img-fluid subcription_channel_image' alt="channel_profile_pic" />
            </Link>
            <Link className='me-3' href={'/'}>
              <img src="https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj" className='img-fluid subcription_channel_image' alt="channel_profile_pic" />
            </Link>
            <Link className='me-3' href={'/'}>
              <img src="https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj" className='img-fluid subcription_channel_image' alt="channel_profile_pic" />
            </Link>
            <Link className='me-3' href={'/'}>
              <img src="https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj" className='img-fluid subcription_channel_image' alt="channel_profile_pic" />
            </Link>
            <Link className='me-3' href={'/'}>
              <img src="https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj" className='img-fluid subcription_channel_image' alt="channel_profile_pic" />
            </Link>
            <Link className='me-3' href={'/'}>
              <img src="https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj" className='img-fluid subcription_channel_image' alt="channel_profile_pic" />
            </Link>
            <Link className='me-3' href={'/'}>
              <img src="https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj" className='img-fluid subcription_channel_image' alt="channel_profile_pic" />
            </Link>
            <Link className='me-3' href={'/'}>
              <img src="https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj" className='img-fluid subcription_channel_image' alt="channel_profile_pic" />
            </Link>
            <Link className='me-3' href={'/'}>
              <img src="https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj" className='img-fluid subcription_channel_image' alt="channel_profile_pic" />
            </Link>
            <Link className='me-3' href={'/'}>
              <img src="https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj" className='img-fluid subcription_channel_image' alt="channel_profile_pic" />
            </Link>
            <Link className='me-3' href={'/'}>
              <img src="https://yt3.ggpht.com/4WPKEX1cWB23mdOTwEz9P121gqEm1hhUd9rT6DY_lVsxUMUlSe9saOEbk5hlU4sNhYpRFmMglg=s88-c-k-c0x00ffffff-no-rj" className='img-fluid subcription_channel_image' alt="channel_profile_pic" />
            </Link>
          </div>
        </div>
      </div>
      <div className="row my-2">
        <div className="col-md-12">
            <h3>Latest</h3>
        </div>
      </div>
      <div className="row">
        {videos.map((item)=>(
            <div className="col-md-4 my-2" key={item.key}>
                <VideoCard href={item.href} img={item.img} profile={item.profile} channel={item.channel} title={item.title}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Subscription
