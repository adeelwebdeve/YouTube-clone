'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import VideoCard from "@/component/VideoCard";
export default function Home() {

  const [loading, setLoading] = useState(false);
  // for all api data 

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

  const LoadingComponent = ({ key }) => {
    return (
      <>
        <div className="col-md-4 my-2" key={key}>
          <div className="card loading">
            <div className="image">

            </div>
            <div className="content">
              <h4></h4>
              <div className="description">

              </div>
            </div>
          </div>
        </div>
      </>
    )
  }



  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {loading ?
            Array.from({ length: 10 }).map((_, i) => (
              <LoadingComponent key={i} />
            ))
            : (
              <>

                {videos.map((item) => (

                  <div className="col-md-4 my-2" key={item.key}>
                    <VideoCard href={item.href} img={item.img} profile={item.profile} title={item.title} channel={item.channel}/>
                  </div>
                ))}

              </>
            )}
        </div>
      </div>
    </>
  );
}
