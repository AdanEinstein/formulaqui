/**
 * @type { (app: import('express').Express) => void }
 */
module.exports = (app) => {
	app.get("/", (req, res) => {
		res.render("index");
	});
	app.get("/add-formula", (req, res) => {
		res.render("add-formula");
	});
	app.get("/add-categoria", (req, res) => {
		res.render("add-categoria");
	});
	app.get("/list-formulas", (req, res) => {
        res.render("list-formulas", { formulas: [{ 
            id: 1,
            nome: "Equação de Torricelli",
            autor: "Torricelli",
            categoria: "Física",
            descricao: "Equação que relaciona velocidade e distância independente do tempo",
            formula: "V2=V02+2aΔs"
        }] });
	});
    app.get("/formula/:id", (req, res) => {
        res.render("formula", {formula: { 
            id: req.params.id,
            nome: "Equação de Torricelli",
            autor: "Torricelli",
            categoria: "Física",
            descricao: "Equação que relaciona velocidade e distância independente do tempo",
            formula: "V2=V02+2aΔs"
        }});
    });
};
