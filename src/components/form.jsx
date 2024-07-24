import React from 'react'

const Form = () => {
  return (
    <form className='mb-4 font-primarty w-full'>
        <input type="text" className='unline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300' placeholder='What tasks will you do today?'/>
        <button className='bg-gray-700 border-none p-2 text-white cursor-pointer rounded m1-2'>Add Task</button>
    </form>
    )
}

export default Form