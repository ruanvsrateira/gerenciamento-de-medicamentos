const medications = []

var id = 1;

function registerNewMedication() {
    event.preventDefault()
    
    const medication = {
        id,
        name: document.querySelector("#medication-name").value,
        quantity: document.querySelector("#medication-quantity").value,
        class: document.querySelector("#medication-class").value
    }

    medications.push(medication)

    id++;

    readMedications()
}

function readMedications() {
    const tableBody = document.querySelector("table tbody")

    tableBody.innerHTML = ""
    
    for (let i = 0; i < medications.length; i++) {
        tableBody.innerHTML += `
        <tr>
            <td>${medications[i].id}</td>
            <td>${medications[i].name}</td>
            <td>${medications[i].quantity}</td>
            <td>${medications[i].class}</td>
            <td>
                <img src="assets/delete-icon.png" src="icone de lixeira" onclick="deleteMedication(${medications[i].id})">
            </td>
        </tr>
    `
    }
}

function deleteMedication(id) {
    const medication = medications.find((medication) => medication.id == id)

    medications.splice(medications.indexOf(medication), 1)

    readMedications()
}