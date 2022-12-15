import React from 'react'
import SearchMovies from '../component/SearchMovies'

function 
App() {
  return (
    <div className='mx-auto max-w-4xl bg-gray-800 h-screen  box-border'>
      <h1 className='text-center text-5xl p-10 font-bold text-blue-300'>React Movie Search</h1>
      <SearchMovies />
    </div>
  )
}

export default App