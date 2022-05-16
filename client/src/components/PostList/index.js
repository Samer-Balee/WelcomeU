import React from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import { REMOVE_POST } from '../../utils/mutations';




const PostList = ({ posts, refetchPosts }) => {

  const [removePost, { error }] = useMutation(REMOVE_POST);

  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }



  const handleRemovePost = async (postId) => {
    try {
      const { data } = await removePost({
        variables: { postId },
      });
      refetchPosts()
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
              <Link to={`/userdetails/${post.postAuthor}`} className='text-xl font-semibold'>
                <h4 >{post.postAuthor}</h4>
              </Link>
            </div>
            <div>
              <h4 >{post.createdAt}</h4>
            </div>
            <br />
            <h5 className="pb-8 font-semibold">
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
              {/* TODO: we should use ids instead, as username is not unique */}
              {/* backend should only allow owners of the post to delete the post */}
              {Auth.getProfile()?.data?.username === post.postAuthor && <button className="
                  bg-green-200 rounded-md
                  w- mt-3 h-8 block
                  hover:bg-green-300 font-medium"
                type="submit"
                onClick={() => handleRemovePost(post._id)}
              >Delete post
              </button>}
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
