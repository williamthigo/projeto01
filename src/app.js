import express from 'express';
const app = express()
//indicar para o express ler body com json
app.use(express.json())

//mock
const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Camarões', grupo: 'G'},
    {id: 3, selecao: 'Sérvia', grupo: 'G'},
    {id: 4, selecao: 'Camarões', grupo: 'G'}
]

function buscarSelecaoPorId(id){
    return selecoes.filter( selecao => selecao.id == id);
}
//pegar a posição ou index do elemento no array pelo id
function buscaIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id);
}

//criar porta padrão ou raíz
app.get('/', (req, res) => {
    res.send(`teste 2222`);
})

//criando um subdiretório get
app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes);
})

app.get('/selecoes/:id',(req,res)=>{
    res.json(buscarSelecaoPorId(req.params.id));
})

//rota de post
app.post('/selecoes',(req,res) => {
    selecoes.push(req.body);
    res.status(201).send('seleção cadastrada com sucesso!');
})

//rota de post
app.delete('/selecoes/:id',(req,res) => {
    let index = buscaIndexSelecao(req.params.id)
    selecoes.splice(index,1)
    res.send(`Seleção com o id: ${index} excluída!`)
})

app.put('/selecoes/:id',(req,res) => {
    let index = buscaIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
})

export default app
