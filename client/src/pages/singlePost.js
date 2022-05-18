import React from 'react';

import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_POST } from '../utils/queries'

const SinglePost = () => {

  const { postId } = useParams();

  const { loading, data, refetch } = useQuery(QUERY_SINGLE_POST, {
    // Pass the `postId` URL parameter into query to retrieve this post's data
    variables: { postId: postId },
  });
  const post = data?.post || {};
  console.log(post.comments);
  console.log(post.postAuthor);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {Auth.loggedIn() ? (
        <div className='container p-20 mx-auto' >

          <div key={post._id} className='block p-6 rounded-lg shadow-lg bg-gray-100 max-w-2xl my-10'>
            <div className='flex flex-row bg-green-100'>
              <img
                src=""
                className="rounded-full w-32 "
                alt="Avatar"
              />
              <Link to={`/userdetails/${post.postAuthor}`} className='text-xl font-semibold'>
                <h4 >{post.postAuthor}</h4>
              </Link>
            </div>
            <div>
              <h4 >{post.createdAt}</h4>
            </div>
            <br />
            <h5 className="pb-8 font-semibold">
              {post.title}
            </h5>
            <div className="bg-white">
              <p>{post.text}</p>
            </div>
          </div>
          <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-2xl my-10 ">
            <CommentList comments={post.comments} postId={post._id} refetchComments={refetch} />
          </div>
          <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-2xl my-10 " >
            <CommentForm postId={post._id} />
          </div>

        </div>
      ) : (
        <div className='container w-2/3 mx-auto mt-20'>
          {/* <h2 className='font-mono text-2xl text-blue-600/100 font-bold'>Welcome to your App</h2> */}
          <p className='text-xl '>
            You need to be logged in to share your comments.<br /> Please{' '}
            <Link to="/login" className='text-xl text-blue-600/100 font-serif'>login</Link>{' '}
            or <Link to="/signup" className='text-xl text-blue-600/100 font-serif'>signup.</Link>
          </p>
        </div>

      )}
    </>
  )

};

export default SinglePost;
