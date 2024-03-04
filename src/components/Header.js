import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/Women'>Women</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
