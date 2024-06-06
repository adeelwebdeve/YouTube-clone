// all icon for sideBar
import { BiSolidHome, BiMovie } from 'react-icons/bi'
import { TbBrandYoutubeKids } from 'react-icons/tb'
import { MdSubscriptions } from 'react-icons/md'
import { MdVideoLibrary } from 'react-icons/md'
import { LiaHistorySolid } from 'react-icons/lia'
import { MdOutlineOndemandVideo } from 'react-icons/md'
import { CiClock2, CiTrophy, CiFlag1 } from 'react-icons/ci'
import { AiOutlineLike, AiOutlineShopping, AiOutlineSetting } from 'react-icons/ai'

import { LiaFireSolid, LiaCommentDots } from 'react-icons/lia'
import { PiMusicNoteLight } from 'react-icons/pi'
import { ImFeed } from 'react-icons/im'
import { SiYoutubegaming } from 'react-icons/si'
import { IoNewspaperOutline, IoHelpCircleOutline } from 'react-icons/io5'
import { GoLightBulb } from 'react-icons/go'
import { TbChessBishop } from 'react-icons/tb'

const sideLinks = [
    
        {
            name : 'Home',
            icon : <BiSolidHome size={20} />,
            href : '/',
            key: 1
        }, {
            name : 'Subscription',
            icon : <MdSubscriptions size={20} />,
            href : '/subscription',
            key: 3
        },{
            hrline : 'true',
            key : 6987
        } 
        , {
            name : 'History',
            icon : <LiaHistorySolid size={20} />,
            href : '/history',
            key: 5
        }, {
            name : 'Your Videos',
            icon :  <MdOutlineOndemandVideo size={20} />,
            href : '/your_video',
            key: 6
        }, {
            name : 'Watch later',
            icon :  <CiClock2 size={20} />,
            href : '/watch_later',
            key: 7
        }, {
            name : 'Liked Videos',
            icon :  <AiOutlineLike size={20} />,
            href : '/liked_video',
            key: 8
        },{
            hrline : 'true',
            key : 8687
        }, {
            name : 'Trending',
            icon : <LiaFireSolid size={20} />,
            href : '/trending',
            key: 9
        }, {
            name : 'Setting',
            icon : <AiOutlineSetting size={20} />,
            href : '/setting',
            key: 19
        }, {
            name : 'Send Feedback',
            icon : <TbChessBishop size={20} />,
            href : '/send_feedback',
            key: 22
        }
    ]
    


export default sideLinks;