import React from 'react';

import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_POST } from '../utils/queries'

const SinglePost = () => {

    const { postId } = useParams();

    const { loading, data , refetch} = useQuery(QUERY_SINGLE_POST, {
        // Pass the `postId` URL parameter into query to retrieve this post's data
        variables: { postId: postId },
      });
      console.log(data);
      const post = data?.post || {};
      console.log(post.comments);
      console.log(post.postAuthor);

      if (loading) {
        return <div>Loading...</div>;
      }

return (
    <div className='p-20' >
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

        <div className=" ">
        <CommentList comments={post.comments} postId={post._id}  refetchComments={refetch}/>
      </div>
      <div className=" " >
        <CommentForm postId={post._id} />
      </div>
    </div>
)

};

export default SinglePost;