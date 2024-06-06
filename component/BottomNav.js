import Link from 'next/link'
import React from 'react'
import { BiSolidHome, BiSolidUserCircle } from 'react-icons/bi'
import { CiCirclePlus } from 'react-icons/ci'
import { LiaHistorySolid } from 'react-icons/lia'
import { MdSubscriptions } from 'react-icons/md'

const BottomNav = () => {
    return (
        <div className='container-fluid bg-white bottom-Nav-section fixed-bottom'>
            <nav className='navbar navbar-bottom'>
                <div className='bottomNavdiv'>
                    <Link className='links' href={'/'}>
                        <div className="bn-home-icon">
                            <BiSolidHome size={30} />
                        </div>
                    </Link>
                    <Link className='links' href={'/history'}>
                        <div className="bn-history-icon">
                            <LiaHistorySolid size={30} />
                        </div>
                    </Link>
                    <Link className='links' href={'/create'}>
                        <div className="bn-create-icon">
                            <CiCirclePlus size={30} />
                        </div>
                    </Link>
                    <Link className='links' href={'/subscription'}>
                        <div className="bn-subscription-icon">
                            <MdSubscriptions size={30} />
                        </div>
                    </Link>
                    <Link className='links' href={'/user-profile'}>
                        <div className="bn-userprofile-icon">
                            <BiSolidUserCircle size={30} />
                        </div>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default BottomNav
