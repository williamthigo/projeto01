import express from 'express';
const app = express()
//indicar para o express ler body com json
app.use(express.json())

//mock
const selecoes = [
    {id: 1, selecao: 'Brasil', Grupo: 'G'},
    {id: 2, selecao: 'Camarões', Grupo: 'G'},
    {id: 3, selecao: 'Sérvia', Grupo: 'G'},
    {id: 4, selecao: 'Camarões', Grupo: 'G'}
]

//criar porta padrão ou raíz
app.get('/', (req, res) => {
    res.send(`teste 2222`);
})

//criando um subdiretório get
app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes);
})

//rota de post
app.post('/selecoes',(req,res) => {
    selecoes.push(req.body);
    res.status(201).send('seleção cadastrada com sucesso!');
})

export default app
