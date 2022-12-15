import React from 'react'
import MovieCards from './MovieCards';

function SearchMovies() {
  const [query, setQuery] = React.useState('')
  const [movies, setMovies] = React.useState([])
  async function searchMovies(e) {
    e.preventDefault()
    const url = `https://api.themoviedb.org/3/search/movie?api_key=e6bc38606d18c029e1df797f0180444d&language=en-US&query=${query}&page=1&include_adult=false`;
      try {
           const res = await fetch(url)
           const data = await res.json()
           setMovies(data.results);
      } catch (error) {
           console.error(error)
      }
    
   }
  const cards = movies.filter(movie =>movie.poster_path).map((item) =>{
   return <MovieCards {...item} key={item.id} />
  })
    
  return (
    <div className='mx-auto max-w-4xl p-4 text-center '>
        <form action="" className='sm:items-center sm:justify-center sm:flex sm:flex-row  gap-4 flex flex-col' onSubmit={searchMovies}>
            <label htmlFor="query" className='text-white sm:text-lg uppercase mb-1 text-left text-sm font-bold'>Movie Name</label>
            <input value={query} onChange={(e)=> setQuery(e.target.value)} 
            className=' sm:w-5/12 text-lg px-5 py-1 rounded-full border-2 mb-3' type="text" name="query" id="" 
            placeholder='i.e Jurassic Park'/>
            <button className='pb-2 sm:-mt-3 sm:w-3/12 bg-blue-900 text-gray-50 tracking-wider text-2xl py-1 rounded-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 hover:bg-gray-500 duration-300'
             type="submit">Search</button>
        </form>
        {cards}
    </div>
    
  )
}

export default SearchMovies