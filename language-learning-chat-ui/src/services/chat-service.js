const baseUrl = process.env.REACT_APP_API_URL;
const endpoint = '/check';

async function post(url, body) {
  return fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(body || {}) // body data type must match "Content-Type" header
  });
}

async function submitChat(text, language) {
  return post(baseUrl + endpoint + '?text=' + text + "&language=" + language)
    .then(res => res.json())
    .catch(console.log);
}

export { submitChat };