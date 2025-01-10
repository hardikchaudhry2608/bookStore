import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'

const Course = () => {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
            <div className='mt-32 items-center justify-center text-center'>
                <h1 className='text-2xl md:text-4xl '>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
                <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum officiis molestias recusandae odit accusantium numquam nostrum. Ipsam aliquam atque perspiciatis deserunt voluptatem, placeat eos mollitia error, dolores vel vero recusandae iste et accusamus animi? Voluptate iusto eos consequuntur commodi, ullam exercitationem provident illo ducimus incidunt tempora rerum hic quos labore!</p>
                <Link to='/'>
                <button className=' mt-6 text-xl bg-pink-500 px-3 py-1 rounded-md active:scale-90 duration-300 hover:bg-[#FF00D3]'>Back</button>
                </Link>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                    list.map((item)=>(
                        <Cards key={item.id} item={item}  />
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Course