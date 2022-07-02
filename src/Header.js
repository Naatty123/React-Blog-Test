import React from 'react'

export default function Header() {
  return (
    <header class="text-gray-600 bg-red-500 body-font fixed top-0 w-full shadow-xl">
    <div class="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center">
      <a href='/' class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img className='w-10' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'></img>
        <span class="ml-3 text-xl">React Blog</span>
      </a>
         
    </div>
  </header>
  )
}
