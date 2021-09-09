/**
 * Performs HTTP request against an endpoint.
 * 
 * @param {string} endpoint   Endpoint to be fetched.
 * @param {string} method     Any of the HTTP methods to be used in request.
 */
export const fetchAPIEndpoint = (endpoint, method) => {
  const options = { method };

  return fetch(endpoint, options)
    .then(result => result.json());
}

export default fetchAPIEndpoint;