import katex from '/js/katex.mjs';
const result = document.getElementById("result");
const formula = document.getElementById("formula");

result.innerHTML = katex.renderToString(formula.value, {
    throwOnError: false,
    output: "mathml",
});

formula.addEventListener("keyup", handleFormula);

function handleFormula(e) {
    result.innerHTML = katex.renderToString(e.target.value, {
        throwOnError: false,
        output: "mathml",
    });
}
