import React from 'react'
import Card from './Card'

export default function Main() {
  return (
    <div className='min-h-screen grid grid-cols-1 md:grid-cols-10 mt-20'>
        <aside className='col-span-2 bg-orange-300 hidden md:block'>
        <ul className='w-full pt-5'>
            <li className='w-full p-4 bg-orange-400 cursor-pointer hover:bg-orange-500'>
                <a>Blogs</a>
            </li>
            <li className='w-full p-4 bg-orange-400 mt-1 cursor-pointer hover:bg-orange-500'>
                <a>Add Blog</a>
            </li>
        </ul>
        </aside>
        <div className='col-span-8 bg-violet-600 flex flex-col justify-center items-center md:items-start px-5 md:grid  md:grid-cols-3 gap-5 pt-5'>
            <Card  head="First Head" content="This is the Most disgusting Content i Ever Read Soo just leave me alone"/>
            <Card  head="First Head" content="This is the Most disgusting Content i Ever Read Soo just leave me alone"/>
            <Card  head="First Head" content="This is the Most disgusting Content i Ever Read Soo just leave me alone"/>

        </div>



    </div>
  )
}
