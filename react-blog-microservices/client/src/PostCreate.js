import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {  
  const [title, setTitle] = useState('');
  
  const createPost = async (e) => {
    try {
      e.preventDefault();
      await axios.post('http://localhost:5000/posts', { title });
      setTitle('');
    } catch (error) {
      
    }
  };

  return (
    <>
      <form onSubmit={createPost}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input onChange={e => setTitle(e.target.value)} value={title} className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default PostCreate;