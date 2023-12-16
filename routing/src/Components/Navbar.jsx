import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <ul className='nav'>
        
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/contact'>Conatct</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
