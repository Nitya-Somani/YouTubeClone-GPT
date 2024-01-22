import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex  items-center shadow-sm p-1 m-1'>
        <img 
        className='h-10 w-10 rounded-full'
        src="https://img.freepik.com/premium-vector/business-woman-avatar-illustration-simple-cartoon-user-portrait-business-leader_118339-4424.jpg" alt="user-icon" />
       <div className=''>
        <span className='font-bold text-gray-500 px-2'>{name}</span>
        <span>{message}</span>
        </div>
    </div>
  )
}

export default ChatMessage