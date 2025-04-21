const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Log any proxy errors
proxy.on('error', function(err, req, res) {
  console.error('Proxy error:', err);
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end('Something went wrong with the proxy server.');
});

// Create the server
const server = http.createServer(function(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS method for preflight requests
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Proxy the request to the Astro dev server
  proxy.web(req, res, { 
    target: 'http://localhost:5000',
    ws: true
  });
});

// Also handle WebSocket connections
server.on('upgrade', function(req, socket, head) {
  proxy.ws(req, socket, head, { 
    target: 'http://localhost:5000',
    ws: true
  });
});

// Listen on port 3000
server.listen(3000, '0.0.0.0', () => {
  console.log('Proxy server running on port 3000');
  console.log('Proxying requests to Astro dev server on port 5000');
});