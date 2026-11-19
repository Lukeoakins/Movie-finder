import React from 'react'
import { Link } from 'react-router-dom'

const linkStyle = {
    color: "#1b83e5"
}
export default function HomePage() {

  return (
    <div>
      <h1>Top TV</h1>
      <em>All about the smaller silver screen</em>
      <ul>
        <li><Link to="/shows" style={linkStyle}>Explore shows</Link></li>
        <li><Link to="/search" style={linkStyle}>Search your favoutire shows</Link></li>
      </ul>
    </div>
  )
}
