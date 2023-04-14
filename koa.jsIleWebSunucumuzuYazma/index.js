import Koa from "koa"
const app = new Koa()

app.use(ctx => {
    if (ctx.path === '/') {
        ctx.body = '<h1>INDEX Sayfasina Hosgeldiniz.</h1>'
    } else if (ctx.path === '/hakkimda') {
        ctx.body = '<h1>Hakkimda Sayfasina Hosgeldiniz.</h1>'
    } else if (ctx.path === '/iletisim') {
        ctx.body = '<h1>Iletisim Sayfasina Hosgeldiniz.</h1>'
    } else{
        ctx.type = "text/html"
        ctx.body = "<h1>404 The Page Not Found!</h1>"
    }
})

app.use(function* () {
    this.req
})

const PORT = 3000
app.listen(PORT)
