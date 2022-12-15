import React from 'react'

function MovieCards(props) {
      const {title,overview, vote_count, release_date, poster_path, vote_average
    } = props
  return (
    <div className='font-medium mt-5 mx-auto max-w-4xl px-5 py-5 text-left box-border shadow-2xl rounded-lg mb-4 bg-white bg-gradient-to-r from-blue-50 via-blue-600 to-blue-300'>
        <div className='mb-3 mx-auto py-5'><img className='mx-auto rounded-md max-w-full h-auto' src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}` }alt="" /></div>
        <h1 className='text-4xl font-bold tracking-wider mb-5'>{title}</h1>
        <p className='mb-4'><small>RELEASE DATE: {release_date}</small></p>
        <p className='mb-4'><small>RATING: {vote_average}</small></p>
        <p className='mb-4'><small>VOTE COUNT: {vote_count}</small></p>
        <p className='bg-blue-200 px-10 rounded-md  text-blue-600 py-2'>{overview}</p>
    </div>
  )
}

export default MovieCards