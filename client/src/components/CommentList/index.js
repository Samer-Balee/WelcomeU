import React from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_COMMENT } from '../../utils/mutations';
import Auth from '../../utils/auth';

const CommentList = ({ comments = [], postId , refetchComments }  ) => {
  
    const [removeComment, { error }] = useMutation(REMOVE_COMMENT);

  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  const handleRemoveComment = async (postId, commentId) => {
    try {
      const { data } = await removeComment({
        variables: 
        { 
        postId,
        commentId  
        },
      });
      refetchComments()
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h3
        className=""
      >
        Comments
      </h3>
      <div className="">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="">
              <div className="">
                <h5 className="">
                  {comment.commentAuthor} commented{' '}
                  <span >
                    on {comment.createdAt}
                  </span>
                </h5>
                <p className="">{comment.commentText}</p>
                {Auth.getProfile()?.data?.username === comment.commentAuthor && 
                <button className='
                text-xl'
                type="submit"
                onClick={() => handleRemoveComment(postId, comment._id)}
                >
                x</button>
                }
              </div>
              {error && (
              <div className="my-3 p-3  text-black">{error.message}</div>
            )}
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
