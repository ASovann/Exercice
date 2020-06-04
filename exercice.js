var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false
}));

// liste livre

let tablivres = [
    {
        'name' : 'Hello World', 
        'ISBN' : 'RN444777',
        'price' : '9.00'
    },
    {
        'name' : 'T qui',
        'ISBN' : 'FR6666',
        'price' : '3.00'
    }
]

app.post('/livres', (req, res) => {
    console.log('post book');
        let livre = {
            'name' : req.body.name,
            'ISBM' : req.body.ISBN,
            'price' : req.body.price
        };
        res.json(livre);
        console.log(livre);
        tablivres.push(livre);
})

app.route('/livres:idlivres')
    .get((req, res) => {
        let idLivres = req.params.idLivres;
        console.log(idLivres);

        if(tablivres[idLivres] != null){
            res.json(tablivres[idLivres]);
        }
        else{
            res.send('Le livre est inconnu');
        }
    })
    .put((req, res) => {
        res.send('modifier le livre')
        let idLivres = req.params.idLivres;
        if(tablivres[idLivres] != null){
            let livre = {
                'name' : req.body.name,
                'ISBM' : req.body.ISBN,
                'price' : req.body.price
            };
            res.json(livre);
            console.log(livre);
            tablivres[idLivres] = livre;
        }
        else{
            res.send('Livre inconnu');
        }
    })
    .delete((req, res) => {
        res.send('supprimer un livre')
        if(tablivres[idLivres] != null){
            res.json(livre);
            console.log(livre);
            tabBook.splice(idLivres);
        }
        else{
            res.send('Livre inconnu');
        }

    })

app.listen(3000);