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
          <div key={post._id} className='block p-6 rounded-lg shadow-lg bg-white max-w-2xl my-10'>
            <div className='flex flex-row'>
              <img
                src=""
                className="rounded-full w-32"
                alt="Avatar"
              />
              <h4 >{post.postAuthor}</h4>
              
            </div>
            <div>
                 <h4 >{post.createdAt}</h4>
            </div>
            <br />
            <h5 className="p-2">
              {post.title}
            </h5>
            <div className="p-4">
              <p>{post.text}</p>
            </div>
            
           <FontAwesomeIcon icon="fa-regular fa-thumbs-up" />

            
          </div>
        ))}
    </div>
  );
};

export default PostList;
