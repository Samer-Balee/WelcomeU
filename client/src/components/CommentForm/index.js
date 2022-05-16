import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ postId }) => {
  const [commentText, setCommentText] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: { postId, commentText, commentAuthor },
      });

      setCommentText('');
      setCommentAuthor('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-80 my-10">
        <label className="block p-1 rounded-lg shadow-lg bg-white max-w-80 my-1">Comment
          <textarea
            className='w-full'
            name="commentText"
            placeholder="Add your comment..."
            value={commentText}
           
            onChange={(event) => { setCommentText(event.target.value) }}
          ></textarea>
          </label>
          <label className="block ">Your name
            <input className='
                 w-full
                '
              name="name"
              type="text"
              placeholder="name"
              value={commentAuthor}
              onChange={(event) => { setCommentAuthor(event.target.value) }}
            />
          </label>
        </div>
        <div >
          <button className="bg-green-200 rounded-md
                  w-full mt-3 h-8 block p-1
                  hover:bg-green-300 font-medium"
                 type="submit">
            Add Comment
          </button>
        </div>
      </form>
    </>
  )

};

export default CommentForm;