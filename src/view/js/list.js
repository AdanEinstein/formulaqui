const trs = document.getElementsByTagName("tr");

Array.from(trs).forEach((tr) => {
    if (tr.id !== "") {
        tr.onclick = gotoFormula;
    }
});

function gotoFormula(tr) {
    location.assign(`/formula/${tr.target.parentElement.id}`);
}
