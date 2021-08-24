import React, { useState, useEffect } from 'react'
import VideoCard from './VideoCard'
import './Results.css'
import axios from './axios'

function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(selectedOption);
            setMovies(request.data.results)
            return request;

        }
        fetchData();
    }, [selectedOption])
    return (
        <div className='results'>
            {
                movies.map((movie) => (<VideoCard movie={movie} key={movie.id} />))
            }
        </div>
    )
}

export default Results
