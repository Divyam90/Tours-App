import React from 'react'
import { pagelinks } from '../assets/data'

const Footer = () => {
  return (
    <div>
         <footer className="section footer">
      <ul className="footer-links">
        
        {pagelinks.map((item,id)=>(
          <li key={id}>
          <a href={item.href} className="footer-link">{item.text}</a>
        </li> 
        ))}

      </ul>
      <ul className="footer-icons">
        <li>
          <a href="https://www.twitter.com" target="_blank" className="footer-icon"
            ><i className="fab fa-facebook"></i
          ></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" className="footer-icon"
            ><i className="fab fa-twitter"></i
          ></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" className="footer-icon"
            ><i className="fab fa-squarespace"></i
          ></a>
        </li>
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
    </div>
  )
}

export default Footer