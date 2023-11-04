import React, { useState } from 'react'

const Posts = ({posts}) => {
  return (
    <div style={{display:"flex" ,flexWrap:"wrap"}}>  {posts.slice(0,5).map((post) => (
        <div key={post.id} style={{border:"1px dashed grey",padding:"5px",width:"250px",margin:"10px"}}>
          <h5 style={{padding:"10px"}}>{post.title}</h5>
          <p>{post.body}</p>
        </div>
      ))}</div>
  )
}

export default Posts