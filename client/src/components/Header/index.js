import React from 'react';
import { Link } from 'react-router-dom';
import welcomeu from '../../assets/images/welcomeu.png';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className='flex justify-center sm:flex-wrap'>
      <div className="flex flex-row  h-20 w-11/12 bg-gradient-to-r from-green-400 to-blue-500 mt-4 rounded-md shadow shadow-blue-500/40" >
        <h1 className="w-full md:w-2/3 sm:w-1/3 text-center text-5xl font-serif font-extrabold py-4 ">WelcomeU</h1>
        <img src={welcomeu} alt="welcomeu" className="rounded-xl md:w-32 sm:w-24" />
        <div className='flex flex-row justify-end w-full'>
        {Auth.loggedIn() ? (
            <>
            <Link to='/ ' >
              <div className="px-3 py-5 m-2 font-serif text-xl hover:text-2xl">Home</div>
            </Link>
            <Link to='/me ' >
              <div className='px-3 py-5 m-2 font-serif text-xl hover:text-2xl'>Profile</div>
            </Link>
            <Link  to='/ '>
              <div className='px-3 py-5 m-2 font-serif text-xl hover:text-2xl' onClick={logout}>
                Logout
              </div>
            </Link>
            </>
          ) : (
            <>
            <Link to='/ ' >
              <div className="px-3 py-5 m-2 font-serif text-xl hover:text-2xl">Home</div>
            </Link>
            <Link to='/me ' >
              <div className='px-3 py-5 m-2 font-serif text-xl hover:text-2xl'>Profile</div>
            </Link>
            <Link to='/login '>
              <div className='px-3 py-5 m-2 font-serif text-xl hover:text-2xl'>Login</div>
            </Link>
            <Link to='/signup '>
              <div className='px-3 py-5 m-2 font-serif text-xl hover:text-2xl'>Signup</div>
            </Link >
            </>
          )}
        </div>
      </div>
    </header >
  );
};

export default Header;

