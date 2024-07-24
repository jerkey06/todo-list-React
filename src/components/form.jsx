import React from 'react'

const form = () => {
  return (
    <form className='mb-4 font-primarty w-full'>
        <input type="text" className='unline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300' placeholder='What tasks will you do today?'/>
        <button className='bg-blue-500 text-white p-4 rounded'>Add Task</button>
    </form>
    )
}

export default form