/**
 * @type { (app: import('express').Express) => void }
 */
module.exports = (app) => {
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
            return await app
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
        } catch (error) {
            return res.status(500).send(error);
        }
    };

    const remove = (req, res) => {
        app.db("formulas")
            .where({ id: req.params.id })
            .del()
            .then(() => res.redirect('/list-formulas'))
            .catch((err) => res.status(500).send(err));
    };

    const get = async (req, res) => {
        try {
            return await app
                .db("formulas")
                .select(
                    "id",
                    "nome",
                    "autor",
                    "categoria",
                    "descricao",
                    "formula"
                );
        } catch (error) {
            return res.status(500).send(error);
        }
    };

    return { save, remove, getById, get };
};
