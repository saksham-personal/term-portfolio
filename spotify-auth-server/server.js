require('dotenv').config();
const express = require('express');
const axios = require('axios');
const querystring = require('querystring');

const app = express();
const port = 8888;

const spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = 'http://127.0.0.1:8888/callback';

app.get('/login', (req, res) => {
  const scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: spotify_client_id,
      scope: scope,
      redirect_uri: redirect_uri
    }));
});

app.get('/callback', async (req, res) => {
  const code = req.query.code || null;

  try {
    const response = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      data: querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirect_uri
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64'))
      }
    });

    const { access_token, refresh_token } = response.data;

    console.log('Access Token:', access_token);
    console.log('Refresh Token:', refresh_token);

    res.send('Success! You can now close this window. Check your console for the tokens.');

  } catch (error) {
    console.error('Error getting tokens:', error.response ? error.response.data : error.message);
    res.send('Error getting tokens. Check your console for more details.');
  }
});

app.listen(port, () => {
  console.log(`\nNavigate to http://127.0.0.1:${port}/login to get your refresh token.\n`);
});