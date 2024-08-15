import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Testing = () => {
  const [movies, setMovies] = useState([]);
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjY4YzNjNDI0Njc5NDJlYzgwM2FlOTJhNTZmOWEwYyIsIm5iZiI6MTcyMzQ1NDUwNy45Mzg0LCJzdWIiOiI2NDBlYWFlZWUxOGUzZjA3YWM1MjE4YzYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.AR6YcxK3kxjuDjmPIMPdOeiERvOGsYj-loXsUSlWfYk';

  useEffect(() => {
    axios.request({
      headers: {
        Authorization: `Bearer ${token}`
      },
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/popular`
    }).then(response => {
      setMovies(response.data.results.slice(0, 5)); // Limit to 5 items for the carousel
    }).catch(error => {
      console.error("There was an error fetching the data!", error);
    });
  }, []);

  return (
    <div className="carousel w-full">
     
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="h-60 w-[100%]"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href={`#slide${index === 0 ? movies.length : index}`} className="btn btn-circle">❮</a>
            <a href={`#slide${index === movies.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
            
          </div>
          <div className="navbar-container  bg-gradient-to-b from-gray-100 to-transparent" />
        </div>
        
      ))}
      
    </div>
  );
}

export default Testing;
