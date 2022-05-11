import React from 'react';
import { useQuery } from '@apollo/client';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

import { QUERY_POSTS } from '../utils/queries';



const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];



  return (
    <main className='flex justify-around'>
      {/* <div className='flex flex-row w-11/12 justify-between'> */}
      
      {loading ? (
            <div>Loading...</div>
          ) : (
        <PostList 
        posts= {posts}
        />
        )}
        
        <PostForm />
         
      {/* </div> */}
    </main>
  );
};


export default Home;
