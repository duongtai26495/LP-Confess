import React, { useEffect, useState } from 'react'

const Empty = ({ type }) => {

  const [result, setResult] = useState("")
  
  useEffect(()=>{
    const display_content = () => {
      switch (type) {
        case "comment":
          setResult("No comment to show")
          break;
        case "article":
          setResult("No article to show")
          break;
      }
    }
    
    display_content()
  },)
  

  return (
    <div>{result}</div>
  )
}

export default Empty