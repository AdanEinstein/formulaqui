const katex = require("katex");
/**
 * @type { (app: import('express').Express) => void }
 */
module.exports = (app) => {
    app.get("/", (req, res) => {
        res.render("index");
    });
    app.get("/add-formula", (req, res) => {
        res.render("add-formula");
    }).post("/add-formula", app.src.controller.formula.save);
    app.get("/list-formulas", async (req, res) => {
        const formulas = await app.src.controller.formula.get(req, res);
        formulas.map((form) => {
            try {
                const f = katex.renderToString(form.getFormula(), {
                    throwOnError: false,
                    output: "mathml",
                });
                form.setFormula(f);
            } catch (error) {}
            return form;
        });
        res.render("list-formulas", { formulas });
    });
    app.get("/formula/:id", async (req, res) => {
        const formula = await app.src.controller.formula.getById(req, res);
        res.render("formula", { formula });
    });
    app.post("/formula/:id", app.src.controller.formula.save);
    app.get("/delete/:id", app.src.controller.formula.remove);
};
