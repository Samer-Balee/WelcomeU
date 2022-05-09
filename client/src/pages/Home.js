import React from 'react';
import { useQuery } from '@apollo/client';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

import { Query_POSTS } from '../utils/queries';



const Home = () => {
  const { loading, data } = useQuery(Query_POSTS);
  const posts = data?.posts || [];

  

  return (
    <main className='container mx-auto flex flex-row justify-around'>

      <div className='columns-8'>PostList

      </div>
      <PostForm/>
    </main>
  );
};


export default Home;
