import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS } from '../../utils/queries';
import Auth from '../../utils/auth';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    // const [likeCount, setlikeCount] = useState(0);

    const [addPost, { error }] = useMutation(ADD_POST, {
        update(cache, { data: { addPost } }) {
          try {
            const { Posts } = cache.readQuery({ query: QUERY_POSTS });
    
            cache.writeQuery({
              query: QUERY_POSTS,
              data: { Posts: [addPost, ...Posts] },
            });
          } catch (e) {
            console.error(e);
          }
        },
    });
    

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addPost({
              variables: {
                title,
                text,
            
              },
            });
            setTitle('')
            setText('');
          } catch (err) {
            console.error(err);
          }
    };

    
    return (
        
            <div className=' w-1/4 p-5 mt-10'>
                {Auth.loggedIn() ? (
                <form onSubmit={handleFormSubmit}>
                    <h3 className="text-2xl font-medium">Creat a post</h3>
                    <label className="block mt-3">
                        <input className='
                 mt-3
                 block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
                '
                            name="title"
                            type="text"
                            placeholder="title"
                            value={title}
                            onChange={(event) => { setTitle(event.target.value) }}
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">What's in your mind?</span>
                        <textarea className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                            name="text"
                            type="text"
                            placeholder="type here"
                            value={text}
                            onChange={(event) => { setText(event.target.value) }}
                            rows="3">
                        </textarea>
                    </label>
                    <label className="block">
                        <input className="form-control
                  block
                  mt-1
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="file">
                        </input>
                    </label>
                    <button className="
                  bg-blue-400 rounded-md
                  w-full mt-3 h-10 block
                  hover:bg-blue-500 font-medium"
                        type="submit"
                    >SUBMIT
                    </button>
                    <button className="
                  bg-green-400 rounded-md
                  w-full mt-3 h-8 block
                  hover:bg-green-300 font-medium"
                        type="submit"
                    >CLEAR
                    </button>
                    {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
                </form>
            
        ) : (
          <>
          <h2 className='font-mono text-2xl text-blue-600/100 font-bold'>Welcome to your App</h2>
            <p className='text-xl '>
          You need to be logged in to share your posts. Please{' '}
          <Link to="/login" className='text-xl text-blue-600/100 font-serif'>login</Link><br />
           or <Link to="/signup" className='text-xl text-blue-600/100 font-serif'>signup.</Link>
        </p>
        </>
        )}
        </div>
    );


    
}

export default PostForm;