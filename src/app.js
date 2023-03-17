const doc = {
tbody: null,
saveButton: null

};
const state = {
    dolgozoLista: [],
    host: null
};



function init(){
    state.host = 'http://localhost:8000/';
    doc.tbody = document.querySelector('#tbody');
    
    window.addEventListener('load', () => {
        init();
        render();
        doc.saveButton = document.querySelector('#saveButton');
    })
    getEmployee();
}
function getEmployee(){
    let endpoint = 'employees';
    let url = state.host + endpoint + '/' + id;
    console.log(url);
fetch(url,{
    method: 'delete'
})
.then(response => {response.json()
})
.then(result =>{
    console.log(result);
    render();
    getEmployee();
})
.catch (err => {
    console.log("Hiba!")
    consoler.log(err)
});
}
function deleteEmployee(id) {
    let endpoint
    fetch(state.url);

}

function startDeleteEmployee(event){
    let id = event.getAttribute('data-id');
    deleteEmployee(id);
}

doc.saveButton.addEventListener('click', () => {
    console.log('műkszik')
});

function render(){
    let rows = '';
    state.dolgozoLista.forEach(dolgozo => {
        console.log(dolgozo.name)
        rows += `
        <tr>
        <td>${dolgozo.id}</td>
        <td>${dolgozo.name}</td>
        <td>${dolgozo.city}</td>
        <td>${dolgozo.salary}</td>
        <td><button class="btn btn-warning"
        onclick="startDeleteEmployee(this)"
        data-id="${dolgozo.id}"
        >Törlés</button></td>
        </tr>

        `;


    });
    doc.tbody.innerHTML = rows;
}


