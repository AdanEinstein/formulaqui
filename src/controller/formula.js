/**
 * @type { (app: import('express').Express) => void }
 */
module.exports = (app) => {
    const Formula = app.src.model.Formula;
    const save = (req, res) => {
        const formula = { ...req.body };
        if (req.params.id) {
            formula.id = req.params.id;
            app.db("formulas")
                .update(formula)
                .where({ id: formula.id })
                .then((_) => res.redirect("/list-formulas"))
                .catch((err) => res.status(500).send(err));
        } else {
            app.db("formulas")
                .insert(formula)
                .then((_) => res.redirect("/list-formulas"))
                .catch((err) => res.status(500).send(err));
        }
    };

    const getById = async (req, res) => {
        try {
            const data = await app
                .db("formulas")
                .select(
                    "id",
                    "nome",
                    "autor",
                    "categoria",
                    "descricao",
                    "formula"
                )
                .where({ id: req.params.id })
                .first();
            return new Formula(
                data.id,
                data.nome,
                data.autor,
                data.categoria,
                data.descricao,
                data.formula
            );
        } catch (error) {
            return res.status(500).send(error);
        }
    };

    const remove = (req, res) => {
        app.db("formulas")
            .where({ id: req.params.id })
            .del()
            .then(() => res.redirect("/list-formulas"))
            .catch((err) => res.status(500).send(err));
    };

    const get = async (req, res) => {
        try {
            const data = await app
                .db("formulas")
                .select(
                    "id",
                    "nome",
                    "autor",
                    "categoria",
                    "descricao",
                    "formula"
                );
            const formulas = data.map(f => {
                return new Formula(f.id, f.nome, f.autor, f.categoria, f.descricao, f.formula);
            })
            return formulas
        } catch (error) {
            return res.status(500).send(error);
        }
    };

    return { save, remove, getById, get };
};
