import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';


const UserDetails = ( ) => {

  const { data } = useQuery(QUERY_USER, {
      
    variables: { username: "Samer Balee" },
  } );
  


    return (
         <div>
             Hi I am { data.user.username }
         </div>
    )
}

export default UserDetails;