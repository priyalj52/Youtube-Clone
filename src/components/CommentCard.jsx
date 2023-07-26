import React from 'react'

const CommentCard = ({title,replies,votes,content,photo,publishedAt}) => {
  return (
    <div className='flex mt-2'>  
      <div className="photo">
<img src={photo} alt="avatar" className='rounded-full object-contain h-8 w-10' />
      </div>
      <div className="comment">
    
        <h1 className='font-bold'>{title}            <span className='font-light'><em>{publishedAt}</em></span></h1>
       <p>{content}</p>
        <p className='font-light'> {replies}  <em>Replies </em>{votes}Votes</p>
      </div>

    </div>
  )
}

export default CommentCard
