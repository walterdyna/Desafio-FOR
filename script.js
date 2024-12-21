let p = document.querySelector('p');
let input = document.querySelector('input');

const contacts = [
    { name: "Fabio Silva", phone: "123-456-7890" },
    { name: "Bruno Calazans", phone: "987-654-3210" },
    { name: "Rafael Gomes", phone: "555-555-5555" },
    { name: "Simone", phone: "111-111-1111"},
    { name: "Alan", phone: "222-222-2222"},
    { name: "Hiago", phone: "333-333-3333"},
    { name: "Mestre Fabiano", phone: "444-444-4444"},
    { name: "Alex Trouxa", phone: "555-654-5555"},
    { name: "Augusto", phone: "777-777-7777"}
]

function search(){

    for (let i = 0; i < contacts.length; i++) {
        
        if (input.value.toLocaleLowerCase === contacts[i].name.toLocaleLowerCase) {
            p.innerHTML = `Contato encontrato Nome: ${contacts[i].name} Tel: ${contacts[i].phone}`;
            break
        } else {
            p.innerHTML = `Contato não encontrado`;
        }
        
    }
}

