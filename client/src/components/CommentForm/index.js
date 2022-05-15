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
              
          </div>
      )

}