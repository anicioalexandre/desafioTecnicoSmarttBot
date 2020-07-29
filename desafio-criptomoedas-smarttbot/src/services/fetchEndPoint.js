const fetchEndpoint = (url) =>
  fetch(url).then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );

export default fetchEndpoint;
