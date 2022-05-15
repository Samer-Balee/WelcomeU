import React from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { REMOVE_POST } from '../../utils/mutations';
import { QUERY_ME} from '../../utils/queries'



const PostList = ({ posts }) => {

  const [removePost, { error }] = useMutation(REMOVE_POST);
  //   update(cache, { data: { removePost } }) {
  //     try {
  //       const  posts  = cache.readQuery({ query: QUERY_ME });
  //       cache.writeQuery({
  //         query: QUERY_ME,
  //         data: { me: removePost, ...posts},
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  // });

  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  

  const handleRemovePost = async (postId) => {
    try {
      const { data } = await removePost({
        variables: { postId },
      });
    } catch (err) {
      console.error(err);
    }
  };

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
              <Link to='userdetails '>
              <h4 >{post.postAuthor}</h4>
              </Link>
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
              <Link
              className="mt-5 text-blue-500"
              to={`/posts/${post._id}`}
            >
              Comment
            </Link>
              <button className="
                  bg-green-200 rounded-md
                  w- mt-3 h-8 block
                  hover:bg-green-300 font-medium"
            type="submit"
            onClick={() => handleRemovePost(post._id)}
          >Delete post
          </button>
            </div>
            
           {/* <FontAwesomeIcon icon="fa-regular fa-thumbs-up" /> */}
           {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
            
          </div>
          
        ))}
    </div>
  );
};

export default PostList;
