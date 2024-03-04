import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <main>
      <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/women'>Women</Link>
            </li>
        </ul>
      </div>
      </main>
    </div>
  )
}

export default Header
