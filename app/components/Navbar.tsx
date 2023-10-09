import React from 'react'
import Link from 'next/link'
import styles from '../Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
  return (
    <div className={styles.body}>
  
    <p className={styles.navbar}>
    Navbar
    </p>
    <ul className={styles.navLinks}>
      <li>
        <Link href="/pages/aboutus">
          About
        </Link>
      </li>
      <li>
        <Link href="/pages/contactus">
          Contact Us
        </Link>
      </li>
      <li>
        <Link href="/users/products">
        Products
        </Link>
      </li>
      <li>
        <Link href="/users">
          Users
        </Link>
      </li>
      <li>
        <Link href="/posts">
          posts
        </Link>
      </li>
    
    </ul>
  </div>
  )
}

export default Navbar
