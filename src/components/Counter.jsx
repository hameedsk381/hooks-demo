import  { useMemo, useState } from 'react'

const Counter = () => {
    const initialState = 0;
const [count,setCount] = useState(initialState);
const cubeRoot = useMemo(() => {
  console.log("caluuclated");
  return Math.cbrt(count)}, [count]);
  return (
    <div style={{display:"flex",placeItems:"center",justifyItems:"center",gap:"15px"}}>
      <button disabled={count >= 10} onClick={()=>{setCount((previousCount)=> previousCount + 1)}}> +</button>
      <h1>{count}</h1>
      <button disabled={count <= 0}  onClick={()=>{setCount((previousCount)=> previousCount - 1)}}> -</button>
      <button onClick={()=> setCount(initialState)}>reset</button>
      {cubeRoot}
      
    </div>
  )
}

export default Counter