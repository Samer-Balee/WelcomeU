import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';

import Auth from '../../utils/auth';

const PostForm = () => {
    const handleFormSubmit = () => {

    }

return (
<div className='container w-1/4 mx-auto mt-10'>
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
            />
          </label>
          <label class="block">
            <span class="text-gray-700">What's in your mind?</span>
            <textarea class="
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
              rows="3">
            </textarea>
          </label>
          <label class="block">
            <input class="form-control
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
        </form>
      </div>
);


}

export default PostForm;