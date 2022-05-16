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
    <div>
      <form
        className=""
        onSubmit={handleFormSubmit}
      >
        <div className="">
          <textarea
            name="commentText"
            placeholder="Add your comment..."
            value={commentText}
            className=""
            onChange={(event) => { setCommentText(event.target.value) }}
          ></textarea>
          <label className="block mt-3">
            <input className='
                 
                '
              name="name"
              type="text"
              placeholder="name"
              value={commentAuthor}
              onChange={(event) => { setCommentAuthor(event.target.value) }}
            />
          </label>
        </div>

        <div className="">
          <button className="" type="submit">
            Add Comment
          </button>
        </div>
      </form>
    </div>
  )

};

export default CommentForm;