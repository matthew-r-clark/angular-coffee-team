module.exports = async function (context, req) {
  context.log('HTTP request for GetForumPosts.');

  const topic = (req.query.topic || (req.body && req.body.topic));
  let response;

  const data = {
    General: [],
    Recipes: [],
    'fav brew method?': [
      { title: 'aeropress', author: 'mattata', time: '6:04pm 03/30/2020', message: 'the most versatile method i know of...', replies: [
        { author: 'jarambe', time: '6:13pm 03/30/2020', message: 'Yeah it really is!'},
        { author: 'mattata', time: '6:42pm 03/30/2020', message: 'what is your favorite recipe?'},
      ] },
      { title: 'Kalita', author: 'jarambe', time: '8:27am 04/01/2020', message: 'My favorite method now days is the Kalita. Love how consistent it is.'},
    ],
    'v60 vs aeropress': [],
    'what does everyone think of James Hoffman?': [],
  };

  if (topic) {
    response = data[topic];
  } else {
    response = data;
  }

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: response,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    },
  };
}