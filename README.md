# Node.js Port Already in Use Error

This repository demonstrates a common error in Node.js development: the `EADDRINUSE` error, which occurs when a server attempts to bind to a port that is already in use.  The `bug.js` file shows the problematic code, and `bugSolution.js` provides a solution.

## Problem
The provided Node.js code creates an HTTP server and attempts to listen on port 8080. If another application is already using that port (e.g., another Node.js server or a different service), the server will fail to start and throw an `EADDRINUSE` error.

## Solution
The solution involves checking if the port is available before starting the server, or using a different port.  The `bugSolution.js` file demonstrates a solution that utilizes a simple retry mechanism.  More sophisticated solutions might involve dynamically finding an available port.