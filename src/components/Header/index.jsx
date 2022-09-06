import { useState } from "react"
export function Header() {
  const [user, setUser] = useState(false) 
  return(
    <div className={`${user?'':'hidden'}`}>
     <h1>oi</h1>
    </div>
  )
}