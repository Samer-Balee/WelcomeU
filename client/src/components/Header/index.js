import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
    const logout = (event) => {
      event.preventDefault();
      Auth.logout();
    };
    return (
      <header className="flex flex-row bg-red-200 h-16">
        <div className='bg-blue-200 w-32'>LOGO</div>
        <div className='flex bg-green-100 justify-end w-full'>
          <div className="px-4 py-4 mx-2">home</div>
          <div className='px-4 py-4 mx-2'>Profile</div>
          <div className='px-4 py-4 mx-2'>Login</div>
          <div className='px-4 py-4 mx-2'>Signup</div>
        </div>

        {/* <div className="container flex-row justify-space-between-lg justify-center align-center">
          <div>
            <Link className="text-light" to="/">
              <h1 className="m-0">Tech Thoughts</h1>
            </Link>
            <p className="m-0">Get into the mind of a programmer.</p>
          </div>
          <div>
            {Auth.loggedIn() ? (
              <>
                <Link className="btn btn-lg btn-info m-2" to="/me">
                  {Auth.getProfile().data.username}'s profile
                </Link>
                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-lg btn-info m-2" to="/login">
                  Login
                </Link>
                <Link className="btn btn-lg btn-light m-2" to="/signup">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div> */}
      </header>
    );
  };
  
  export default Header;

  //'bg-blue-100 px-8 py-4 mx-2 rounded-md hover:bg-blue-400 cursor-pointer shadow-lg'
  