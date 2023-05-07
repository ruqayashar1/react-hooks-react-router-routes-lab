import React from "react";
import { movies } from "../data";

function Movies() {
  const movieItems= movies.map((movie)=>{
    return(
      <movie key={movie.title}
      title={movie.title}
      time={movie.time}
      genres={movie.genres}/>
    )
  })
  return (
<div>
  <h1>Movies page</h1>
  <div>{movieItems}</div>
</div>
  )
}
function Movie({title,time,genres}){
  const genresList=genres.map((genre)=>(
<li key={genre}>{genre}</li>
  ))
  return (
    <div>
      <h3>{title}</h3>
      <h4>{time}</h4>
      <ul>{genresList}</ul>
    </div>
  )
}
export default Movies;
