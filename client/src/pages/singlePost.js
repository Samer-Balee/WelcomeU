import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_POST } from '../utils/queries'

const SinglePost = () => {

    const { postId } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_POST, {
        // Pass the `postId` URL parameter into query to retrieve this post's data
        variables: { postId: postId },
      });

      const post = data?.post || {};

      if (loading) {
        return <div>Loading...</div>;
      }

return (
    <div className='' >

        <div className="">
        <CommentList comments={post.comments} />
      </div>
      <div className="" >
        <CommentForm postId={post._id} />
      </div>
    </div>
)

};

export default SinglePost;