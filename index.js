const express = require('express'),
    app = express();

const connection = require('./database/database');

connection.authenticate().then(() => console.log('conexão concluída')).catch(err => console.log('conexão falhou', err));

const Pergunta = require('./database/Pergunta'),
    Resposta = require('./database/Resposta');

//setting the view for EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));

// recebendo os dados com body-parser (já do express) pra transformá-los em código javascript
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//rotas
app.get('/', (req, res) => {
    // Pergunta.findAll({ raw: true, order: [['id', 'DESC']] }).then(perguntas => {
    //     res.render('index', {
    //         perguntas: perguntas,
    //     })
    // })

    Promise.all([Pergunta.findAll({ raw: true, order: [['id', 'DESC']] }), Resposta.findAll({ raw: true, order: [['id', 'DESC']] })]).then(data => {
        res.render('index', {
            perguntas: data[0],
            respostas: data[1]
        })
    })
})

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
})

//pra receber os dados do form
app.post('/salvarpergunta', (req, res) => {
    let autorPerg = req.body.autorPerg,
        titulo = req.body.titulo,
        descricao = req.body.descricao;

    Pergunta.create({
        autor: autorPerg,
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/');
    })
})

//rota da pergunta
app.get('/pergunta/:id', (req, res) => {
    let id = req.params.id;

    Pergunta.findOne({
        where: { id: id }
    }).then(pergunta => {
        if (pergunta != undefined) {
            Resposta.findAll({ where: { perguntaId: pergunta.id }, order: [['id', 'DESC']] }).then(respostas => {
                res.render('pergunta', {
                    pergunta: pergunta,
                    respostas: respostas
                })
            })
        } else {
            res.render('fallback')
        }
    })
});

//respondendo a pergunta
app.post('/responder', (req, res) => {
    let autorRes = req.body.autorRes,
        corpo = req.body.corpo,
        perguntaId = req.body.pergunta;

    Resposta.create({
        autor: autorRes,
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.send(res.redirect(`/pergunta/${perguntaId}`))
    })
})

app.listen(8080);
