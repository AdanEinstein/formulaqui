class Formula {
    constructor(id, nome, autor, categoria, descricao, formula) {
        this._id = id;
        this._nome = nome;
        this._autor = autor;
        this._categoria = categoria;
        this._descricao = descricao;
        this._formula = formula;
    }
    getId() {
        return this._id;
    }
    setId(id) {
        this._id = id;
    }
    getNome() {
        return this._nome;
    }
    setNome(nome) {
        this._nome = nome;
    }
    getAutor() {
        return this._autor;
    }
    setAutor(autor) {
        this._autor = autor;
    }
    getCategoria() {
        return this._categoria;
    }
    setCategoria(categoria) {
        this._categoria = categoria;
    }
    getDescricao() {
        return this._descricao;
    }
    setDescricao(descricao) {
        this._descricao = descricao;
    }
    getFormula() {
        return this._formula;
    }
    setFormula(formula) {
        this._formula = formula;
    }
}

module.exports = (app) => Formula;
