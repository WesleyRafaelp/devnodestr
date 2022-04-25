# API com node.js

É uma API feita com node.js, onde a mesma serve para gerar cadastros de usuários, produtos e pedidos. 
 
## Dependências 

* Trocar no arquivo **config.js** as seguintes variáveis.

    `module.exports = {
    connectionString :'preencha com sua conexão do banco de dados',
    sendgridKey: 'preencha sua key do sendgrid',
    containerConnectionString:'preencha com a connection string do container da azure'
};`

* No arquivo **email-service.js** trocar a seguinte variável.

    `sendgrid.send({
        to: to,
        from: 'colocar o seu email de sistema',
        subject: subject,
        html: body
    });
};`
