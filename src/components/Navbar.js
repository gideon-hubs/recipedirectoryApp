import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Searchbar from './Searchbar'
// import {useTheme} from '../hooks/useTheme'

function Navbar() {
  // const { color } = useTheme()
  return (
    <div className='navbar'>
        <nav>
                <Link to={'/'} className='brand'>
                     <h1>Recipe Directory</h1>
                </Link>
                <Searchbar/>
                <Link to={'/create'}><h1>Create Recipe</h1></Link>
        </nav>
    </div>
  )
}

export default Navbar