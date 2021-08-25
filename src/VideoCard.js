import React from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from '@material-ui/icons';

const baseURL = 'https://image.tmdb.org/t/p/original';

function VideoCard({ movie }) {
  return (
    <div className="videocard">
      <img
        src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
        alt="logo"
      />
      <div className="text">
        <TextTruncate line={1} element="p" text={movie.overview} />
      </div>
      <h4>{movie.original_title}</h4>

      <p className="videocard__stat">
        {movie.media_type && movie.media_type}
        {movie.release_date || movie.first_air_date}.
        <ThumbUpSharp />
        {movie.vote_count}
      </p>
    </div>
  );
}

export default VideoCard;
