/**
 * @type { (app: import('express').Express) => void }
 */
module.exports = (app) => {
	app.post('/add-formula', (req, res) => {
        try {
            console.log(req.body);
            res.render('list-formulas')
        } catch (error) {
            console.log(error.message);
        }
    })
	app.post('/add-categoria', (req, res) => {
        try {
            console.log(req.body);
            res.render('add-categoria')
        } catch (error) {
            console.log(error.message);
        }
    })
	app.post('/formula', (req, res) => {
        try {
            console.log(req.body);
            res.render('formula', { formula : req.body})
        } catch (error) {
            console.log(error.message);
        }
    })
};
