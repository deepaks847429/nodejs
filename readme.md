what is Node Js.

-> chrome engine(uses v8 engine). Ryan dahl made nodejs. (c++)+ v8= nodejs

->benefit
we can run js outside the browser.
javascript can talk to native machie because of c++.
you can create web servers in javascript language.

-> nodejs is a run time environment for javascript.



<h1>Node js installation</h1>
-> lts can be used for production too.
->even number are always long term support.
->odd number are always current version.

<h1>Hello world nodejs</h1>
-> all dom related things are removed from nodejs. Only core functionality is present.

<h1>modules in nodejs</h1>

->when we  divide our code in small chunks that is known as modular programming.

<h1>file handling in node</h1>

->asynchronus always take callback function, whereas synchronus doesn't require call back function.


<h1>Node js architecture</h1>

request->event queue->event loop->(blocking operation, non blocking operation).

blocking operation(assign a worker and make him work)->thread pool -> return the result.

we have limited thread, so we have to use non-blocking operation.



<h1>Handling url in nodejs</h1>

Uniform resource locator-

->hypertext
->Transfer
->protocol
->secure

query parametrs are exxtra information passed to severs.


<h1>HTTP methods</h1>

->get=when u want to get some data from server.
->post=when u want to send and mutaTE SOME DATA IN SERVER.
->PUT=UPLOAD SOMETHING ON SEVER.
->PATCH=CHANGEING SOME DATA ON DATABASE
->DELTE->DELETE DATA ON SERVER.

<h1>gETTING STARTED WITH EXPRESS JS</h1>

<h1>How versioning work in js</h1>

4.18.2

last part(MINOR FIXES)=2->(OPTIONAL FIXES)
MIDDLE PART-(18)->(RECOMMENDED BUG FIX) OR SECURITY FIX
FIRST PART-MAJOR RELEASE(4)-> CODE MIGHT WORK OR NOT, BREAKING UPDATE.

^  -> INSTALL ALL RECOMMENDED AND MINOR RELEASE AUTOMATICALLY.

~  -> WE CANT INSTALL RECOMMENDED VERSION ALSO, ONLY WE CAN CHANGE MINOR  BUG WALA RELEASE.



<h1>WHAT IS REST API</h1>

Restful api - (rules)=> server client architecture(client and server shouldn't dependent on each other.)

b->always respect http methods.

<h1>express middleware </h1>
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.

const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

This example shows a middleware function mounted on the /user/:id path. The function is executed for any type of HTTP request on the /user/:id path.

app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})


<h1>http headers in api </h1>


HTTP headers and status codes are useful to help intermediary and client programs understand information about requests and responses for applications. HTTP headers contain metadata information.

HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)

<h1>Getting started with mongodb </h1>

-> no sql document based database.
-> strong support for aggregration pipes
->works on bson format
->best for node appliacations.


collection-useers
document

command
show dbs
 use bookDB
 show collections
 db.collections.find();
 db.collections.insert();










