import http from "http"
const PORT = 5000
const server = http.createServer((req, res) => {
    const url = req.url

    if (url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2>INDEX Sayfasina Hos Geldiniz!!!</h2>')
    } else if (url == '/hakkimda') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2>Hakkimda Sayfasina Hos Geldiniz!!!</h2>')
    } else if (url == '/iletisim') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2>ILETISIM Sayfasina Hos Geldiniz!!!</h2>')
    } else{
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write('<h2>404 NOT FOUND.</h2>')
    }

    res.end()
})


server.listen(PORT, () => {
    console.log(`${PORT} is Listening`)
})
