const btnDelete = document.getElementById("deletar");
const id = document.getElementById("id").value;

btnDelete.onclick = deletar;

function deletar() {
    location.assign(`/delete/${id}`);
}
