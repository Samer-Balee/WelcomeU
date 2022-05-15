import React from 'react';
import Auth from '../../utils/auth';

import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../utils/queries';


const UserDetails = () => {
  let { username } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { username: username },
  });

  return (
    <div className='container w-1/3 mx-auto mt-8 p-6 rounded-lg shadow-lg bg-gray-100 '>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='max-w-xl'>
          <h3 className='text-xl font-bold'> Hi I am {data.user.username} from {data.user.country}</h3>
          <p className='text-xl font-bold' >I've arrived to Australia at {data.user.arrivedAt}<br />
             I speak {data.user.speak}<br />
             I live in {data.user.livesIn}<br />
            If you need any help please contact me on my email <br />
            <Link to="" className='text-blue-500'>{data.user.email} </Link>
          </p>
        </div>
      )}
    </div>
  )
}

export default UserDetails;