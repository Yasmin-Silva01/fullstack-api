import mysql from 'mysql2';

const conexao = mysql.createConnection({
      /* LOCAL */
    // host: 'localhost',
   // user: 'root',
   // password: '',
   // database: 'escola'


   /* REMOTO */
   host: 'db4free.net',
    user: 'admin_api_yasmim',
    password: 'senac*123',
   database: 'escola_yasmim'
});

conexao.connect(erro => {
    if(erro){
        console.error(`Erro ao conectar: ${erro.message}`);
    }else{
        console.log(`Banco  conectado em: ${conexao.config.host}`);
    }
});

export default conexao;