import React from 'react'
import './Navbar.css'
import requests from './request'

function Navbar({ setSelectedOption }) {

    return (
        <div className='navbar'>
            <h4 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchTopRated)}>Top_Rated</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchActionMovies)}>Action</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>Comedy</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>Horror</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>Romance</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci_fi</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchAnimation)}>Anomation</h4>
            <h4 onClick={() => setSelectedOption(requests.fetchTV)}>TV Movies</h4>
        </div>
    )
}

export default Navbar
