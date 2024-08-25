import mysql, { createConnection } from 'mysql';

const conexao = createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'bdcopa'
});

export default conexao