import React from 'react'
import styles from "../styles/Header.css"

const Header = () => {
  return (
    <header>
            <a href='#' className='logo'><img src="https://www.fsrmagazine.com/sites/default/files/styles/homepage_carousel_2x_640x476/public/feature-images/restaurant-data-101-guide-getting-started.jpg?itok=U2OLV-r0" ></img></a>
        <h1>Welcome to my restaurant data</h1>
        <nav>
            <ul className='navlist'>
                <li><a href='#'>Inicio</a></li>
                </ul>
            </nav>
</header>
  )
}

export default Header