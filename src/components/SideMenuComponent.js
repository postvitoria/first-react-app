import React from 'react'
import logo from '../logo.svg'

export const SideMenuComponent = () => {
    return (
        <div className='side-menu-container'>
            <img className='side-menu-item' alt='' srcSet={logo}></img>
            <img className='side-menu-item' alt='' srcSet='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxdSYDuDM8OVesiAJFvaCz_l72q2ARvL91b3s1XxraaA&s'></img>
            <img className='side-menu-item' alt='' srcSet='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbK5mKY5Hoj2VebOugW3CNJw7W6jc_-wujUN1WtGAMFw&s'></img>
            <img className='side-menu-item' alt='' srcSet='https://wallpapercave.com/wp/wp12366539.jpg'></img>
        </div>
    )
}
