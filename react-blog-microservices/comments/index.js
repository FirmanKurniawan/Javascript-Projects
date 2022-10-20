const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  
  comments.push({ id: commentId, content });
  
  commentsByPostId[req.params.id] = comments;
  res.send(comments);

  await axios.post('http://localhost:5005/events', {
    type: 'CommentCreated',
    id: commentId,
    content,
    postId: req.params.id
  });

  res.status(201).send(comments);
});

app.post('/events', (req, res) => {
  console.log('Event Received', req.body.type);

  res.send({});
});

app.listen(5001, () => {
  console.log('Listen on 5001');
});