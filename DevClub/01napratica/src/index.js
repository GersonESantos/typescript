"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
var Estados;
(function (Estados) {
    Estados["MG"] = "Minas Gerais";
    Estados["SP"] = "S\u00E3o Paulo";
    Estados["RJ"] = "Rio de Janeiro";
    Estados["ES"] = "Esp\u00EDrito Santo";
    Estados["PR"] = "Paran\u00E1";
    Estados["SC"] = "Santa Catarina";
    Estados["RS"] = "Rio Grande do Sul";
    Estados["MS"] = "Mato Grosso do Sul";
    Estados["MT"] = "Mato Grosso";
    Estados["GO"] = "Goi\u00E1s";
    Estados["DF"] = "Distrito Federal";
    Estados["TO"] = "Tocantins";
    Estados["PA"] = "Par\u00E1";
    Estados["AP"] = "Amap\u00E1";
    Estados["RO"] = "Rond\u00F4nia";
    Estados["AC"] = "Acre";
    Estados["AM"] = "Amazonas";
    Estados["RR"] = "Roraima";
    Estados["CE"] = "Cear\u00E1";
    Estados["RN"] = "Rio Grande do Norte";
    Estados["PB"] = "Para\u00EDba";
    Estados["PE"] = "Pernambuco";
    Estados["AL"] = "Alagoas";
    Estados["SE"] = "Sergipe";
    Estados["BA"] = "Bahia";
    Estados["PI"] = "Piau\u00ED";
    Estados["MA"] = "Maranh\u00E3o";
})(Estados || (Estados = {}));
var produtos = [];
app.get('/', function (req, res) {
    res.send('API is running');
});
var newProdutos = ({
    id: Math.random(),
    nome: 'Batedeira de Bolo walita',
    preco: 10,
    endereco: {
        rua: 'Arceburgo',
        numero: 20,
        bairro: 'Bomfim',
        cidade: 'Belo Horizonte',
        estado: Estados.MG
    }
});
produtos.push(newProdutos);
return res.json(produtos);
;
app.listen(8080, function () {
    console.log('Rodando app listening at http://localhost:8080');
});
