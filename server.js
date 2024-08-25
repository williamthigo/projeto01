import app from './src/app.js';
const PORT = 3000

//escutando
app.listen(PORT,() => {
    console.log(`Servidor rodando no endereçOo http://Localhost:${PORT}`)
})
