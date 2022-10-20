import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const getPosts = async () => {
    const resp = await axios.get('http://localhost:5002/posts');
    console.log(resp);

    setPosts(resp.data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  const renderedPosts = Object.values(posts).map(post => {
    return (
      <div key={post.id} className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h3>{post.title}</h3>
            <CommentList comments={post.comments} />
            <CommentCreate postId={post.id} />
          </div>
        </div>
      </div>
    )
  });

  return (
    <div className="row">
      {renderedPosts}
    </div>
  );
};

export default PostList;