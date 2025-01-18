# Graceful Shutdown in Node.js

This repository demonstrates a common issue in Node.js HTTP servers: the lack of graceful shutdown when interrupted (e.g., by pressing Ctrl+C).  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The initial server implementation doesn't handle the `SIGINT` signal properly. When you interrupt the server, it terminates abruptly, potentially leading to data loss or incomplete operations.

## Solution

The improved solution adds an event listener for the `SIGINT` signal. This allows the server to gracefully close existing connections before terminating, ensuring data integrity and a cleaner shutdown process. 