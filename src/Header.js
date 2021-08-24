import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import SearchIcon from '@material-ui/icons/Search'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'

import './Header.css'

// api key = 12a48185f23cfe8a470b5f90ce5ac93b
// api token = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmE0ODE4NWYyM2NmZThhNDcwYjVmOTBjZTVhYzkzYiIsInN1YiI6IjVmODIyYzExMjY2Nzc4MDAzN2I0ZmQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qHwMy5l5o2iGXLE7dgMMuAtYesb6Z6CmC5CZM58fxhg

export default function Header() {
    return (
        <div className='header'>
            <div className='header__icons'>
                <div className='header__icon header__icon--active'>
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className='header__icon'>
                    <FlashOnIcon />
                    <p>Trending</p>
                </div> <div className='header__icon'>
                    <LiveTvIcon />
                    <p>Verified</p>
                </div> <div className='header__icon'>
                    <VideoLibraryIcon />
                    <p>Collection</p>
                </div> <div className='header__icon'>
                    <SearchIcon />
                    <p>Search</p>
                </div> <div className='header__icon'>
                    <PersonOutlineIcon />
                    <p>Account</p>
                </div>
            </div>
            <img src='https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png' alt='home page logo' />

        </div>
    )
}
