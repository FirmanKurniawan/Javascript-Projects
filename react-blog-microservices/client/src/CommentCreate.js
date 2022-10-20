import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({postId}) => {
  const [content, setContent] = useState('');

  const createComment = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:5001/posts/${postId}/comments`, { content });

    setContent('');
  };

  return (
    <form onSubmit={createComment}>
      <div className="mb-3">
        <label className="form-label">Comment</label>
        <input onChange={e => setContent(e.target.value)} value={content} className="form-control" />
      </div>
      <button className="btn btn-primary">Add Comment</button>
    </form>
  );
};

export default CommentCreate;