import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className='flex justify-center '>
      <div  className="flex flex-row h-20 w-11/12 bg-gradient-to-r from-green-400 to-blue-500 mt-4 rounded-md shadow shadow-blue-500/40" >
        <h1 className="w-full text-center text-5xl font-serif font-extrabold py-4 ">WelcomeU</h1>
        <div className=' w-31'>LOGO</div>
        <div className='flex justify-end w-full'>
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
        </div >
      </div>
    </header >
  );
};

export default Header;

  // //'bg-blue-100 px-8 py-4 mx-2 rounded-md hover:bg-blue-400 cursor-pointer shadow-lg'

  // {/* <div className="container flex-row justify-space-between-lg justify-center align-center">
  //         <div>
  //           <Link className="text-light" to="/">
  //             <h1 className="m-0">Tech Thoughts</h1>
  //           </Link>
  //           <p className="m-0">Get into the mind of a programmer.</p>
  //         </div>
  //         <div>
  //           {Auth.loggedIn() ? (
  //             <>
  //               <Link className="btn btn-lg btn-info m-2" to="/me">
  //                 {Auth.getProfile().data.username}'s profile
  //               </Link>
  //               <button className="btn btn-lg btn-light m-2" onClick={logout}>
  //                 Logout
  //               </button>
  //             </>
  //           ) : (
  //             <>
  //               <Link className="btn btn-lg btn-info m-2" to="/login">
  //                 Login
  //               </Link>
  //               <Link className="btn btn-lg btn-light m-2" to="/signup">
  //                 Signup
  //               </Link>
  //             </>
  //           )}
  //         </div>
  //       </div> */}
