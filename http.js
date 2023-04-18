const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('This is us')
    }

    res.end(
        `
        <h1>Oops!></h1>
        <a href="/"> backhome </a>
        `)

    console.log(req)
    res.write('Welcome to our home page')
    res.end()
})

server.listen(2000)