import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const PostList = ({ posts }) => {

  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div >

      {posts &&
        posts.map((post) => (
          <div key={post._id} className='block p-6 rounded-lg shadow-lg bg-gray-100 max-w-2xl my-10'>
            <div className='flex flex-row bg-green-100'>
              <img
                src=""
                className="rounded-full w-32 "
                alt="Avatar"
              />
              <h4 >{post.postAuthor}</h4>
              
            </div>
            <div>
                 <h4 >{post.createdAt}</h4>
            </div>
            <br />
            <h5 className="font-bold">
              {post.title}
            </h5>
            <div className="bg-white">
              <p>{post.text}</p>
            </div>
            <div className='flex justify-between'>
              <button className='mt-4 text-blue-500'>Like {post.likeCount}</button>
              <button className="
                  bg-green-200 rounded-md
                  w- mt-3 h-8 block
                  hover:bg-green-300 font-medium"
            type="submit"
          >Delete post
          </button>
            </div>
            
           {/* <FontAwesomeIcon icon="fa-regular fa-thumbs-up" /> */}

            
          </div>
        ))}
    </div>
  );
};

export default PostList;
