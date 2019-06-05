const http = require('http')
const port = 8000

function responseHandler (request, response) {
    response.write('hello World')
    res.writeHead(200, {'content-type': 'text/plain'})
    res.write('okay')
    response.end()
}

const server = http.createServer(responseHandler)


server.listen(port)



