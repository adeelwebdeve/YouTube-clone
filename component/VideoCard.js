import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VideoCard = ({href , img , profile , title , channel}) => {
    return (
        <div className="video-crd">
            <Link href={href} className="links">
                <div className="top-image-section">
                    <Image alt='video thumbnail' src={img} className="img-fluid thubnail-img" width={366} height={198} />
                </div>
                <div className="textandTitle">
                    <div className="profile-logo">
                        <Image src={profile}
                            width="42"
                            height="50"
                            className="img-fluid thubnail-profile" alt="" />
                    </div>
                    <div className="title-stuf">
                        <p className="title-paragraph"><b> {title} </b></p>
                        <span className="text-mute d-block form-text">{channel}</span>
                        <span className="text-mute form-text">7.7M Views . 7 Years ago</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default VideoCard


{/* <div className="video-crd">
<Link href={item.href} className="links">
  <div className="top-image-section">
    <Image src={item.img} className="img-fluid thubnail-img" width={366} height={198} />
  </div>
  <div className="textandTitle">
    <div className="profile-logo">
      <Image src={item.profile}
        width="42"
        height="50"
        className="img-fluid thubnail-profile" alt="" />
    </div>
    <div className="title-stuf">
      <p className="title-paragraph"><b> {item.title} </b></p>
      <span className="text-mute d-block form-text">{item.channel}</span>
      <span className="text-mute form-text">7.7M Views . 7 Years ago</span>
    </div>
  </div>
</Link>
</div> */}