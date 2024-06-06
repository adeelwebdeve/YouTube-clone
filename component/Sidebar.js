"use client"
import Link from 'next/link'
import React from 'react'
import sideLinks from './SideLinks'
import { usePathname } from 'next/navigation'
// sideLinkActive
const Sidebar = () => {
    const pathName = usePathname();
    return (
        <div>
            <ul className='sidebarUl'>
                {sideLinks.map((item) =>
                    <>
                        {item.hrline ? (<hr key={item.key} className="hrLine" />) : (
                        <li className={`sidebarLi ${pathName == item.href ? `sideLinkActive` : ``}`} key={item.key}>
                            <Link href={item.href} className='links'>
                                <div className='d-flex align-items-center gap-3'>
                                    <span className='icon'>{item.icon}</span>
                                    <span className="name">{item.name}</span>
                                </div>
                            </Link>
                        </li>
                        )}
                    </>
                )}
            </ul>
        </div>
    )
}

export default Sidebar
