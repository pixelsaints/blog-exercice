import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../redux/actions/posts';
import Card from './CardComponent';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);
  const error = useSelector(state => state.posts.error);

  console.log(loading);

  useEffect(() => {
    dispatch(getPosts());
  }, [])

  return (
    <>
      <div className="col-lg-9 col-md-7 mx-auto space-2 px-lg-0">
        {posts.loading && <h1 className="text-center">Loading...</h1>}

        {error && !loading && <h1 className="text-center">{error}</h1>}

        <div id="results" class="post-list row">
          {posts.length > 0 && posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Posts;