import React from 'react';
import { Link } from 'react-router-dom';



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
                <br />
                  
                
                <span >
                   {post.title}
                  </span>
                <div className=" p-2">
                  <p>{post.text}</p>
                </div>
              </div>
            ))}
        </div>
      );
    };
    
    export default PostList;
    