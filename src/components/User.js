import React, { useState } from 'react'

const User = ({name, location}) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="user-card">
        <h1>Name: {name}</h1>
        <h1>Count: {count}</h1>
        <h1>Count: {count2}</h1>
        <h1>Location: {location}</h1>
        <h1>Contact: 8328138768</h1>
    </div>
  )
}

export default User