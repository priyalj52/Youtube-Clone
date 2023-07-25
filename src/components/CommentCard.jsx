import React from 'react'

const CommentCard = ({title,replies,votes,content,photo}) => {
  return (
    <div className='flex'>  
      <div className="photo">
<img src={photo} alt="avatar" className='rounded-full object-contain h-8 w-10' />
      </div>
      <div className="comment">
    
        <h1 className='font-bold'>{title}            <span className='font-light'><em>2 years</em></span></h1>
       <p>{content}</p>
        <p>Replies-{replies}  Votes-{votes}</p>
      </div>

    </div>
  )
}

export default CommentCard
