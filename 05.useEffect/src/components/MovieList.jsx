import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MovieList = () => {

  let targetDt = '20250611';
  const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
  const MOVIE_URL = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${targetDt}`;

  const [movieList, setMovieList] = useState(null);

  const getMovieList = async () => {
    let res = await axios.get(MOVIE_URL);
    let data = res.data;

    //console.log(data);  
    
    let movies = data.boxOfficeResult.dailyBoxOfficeList.map((item)=>({
        rank:item.rank,
        movieNm:item.movieNm,
        openDt:item.openDt
    }))

    //console.log(movies);
    setMovieList(movies);
    
  }

  useEffect(()=>{
    getMovieList();
  },[])

  return (
    <div>
        <h1>영화 목록</h1>
        <div>
            {movieList.map((movie,index)=>(
                <p key={movie.rank}>
                    {movie.rank}.{movie.movieNm}|{movie.openDt}
                </p>
            ))}
        </div>
    </div>
  )
}

export default MovieList