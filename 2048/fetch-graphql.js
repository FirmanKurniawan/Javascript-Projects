require('isomorphic-fetch');

fetch('https://1jzxrj179.lp.gql.zone/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: '{ posts { title } }' }),
})
  .then(res => res.json())
  .then(res => console.log(res.data));
