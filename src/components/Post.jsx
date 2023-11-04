import { useEffect, useState } from "react"

const Post = () => {
  const [progress,setProgress] = useState(0);
  console.log("Expensive render");
  const onScroll = ()=>{
    setProgress(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll",onscroll)
  console.log(progress)
    return () => {
      console.log("Cleaning up");
      window.removeEventListener('scroll',onScroll)
    }
  }, [])
  
  return (
    <div style={{height:2000}}>
      <h1>{progress}</h1>
      <p>post</p>
    </div>
  )
}

export default Post
