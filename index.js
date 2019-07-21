const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()


app.use(express.static(path.join(__dirname, 'docs')));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
// app.get('*', function (request, response) {
//   response.sendFile(path.resolve(__dirname, './docs/index.html'))
// })

app.listen(port)
console.log('server started on :' + port)
