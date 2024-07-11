# blocking-Non-Blocking-NodeJs
Express Server Blocking vs. Non-Blocking Example

This repository contains an example of an Express server demonstrating the difference between blocking and non-blocking endpoint implementations using Node.js worker threads.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

## 1. Clone the repository:
   git clone https://github.com/saurabhneel/blocking-Non-Blocking-NodeJs.git
   cd express-worker-threads-example

## 2. Install dependencies:
npm install

## Usage

## 3. Testing the Blocking Script
Start the server with the blocking script:
node blocking-script.js

## Access the endpoints:

http://localhost:3000/endpoint1 - Should respond immediately with "This is Endpoint1 Response".
http://localhost:3000/endpoint2 - Will perform a blocking operation and might cause the server to be unresponsive.

## 4. Testing the Non-Blocking Script
Start the server with the blocking script:
node non-blocking-script.js

## Access the endpoints:

http://localhost:3000/endpoint1 - Should respond immediately with "This is Endpoint1 Response".
http://localhost:3000/endpoint2 - Will offload the heavy computation to a worker thread, allowing the server to remain responsive.
