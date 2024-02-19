/* Asincrona:
    Espera a que se ejecute por completo una instrucción, sin obstruir el hilo de procesos.
*/

// Formas de manejar la asincronia

/* 
1. Callbacks => Desuso.
2. Promesas
3. Async / Await =>  La mejor opcion
*/

// CALLBACKS

/*function getUsersWithCallBack(Callback){
    fetch('https://randomuser.me/api/') // Consulta a un endPoint
        .then(response => response.json()) // Traducir o entender JSON
        .then(data => {
            const { results } = data;
            Callback(null, results) // 1. Error / 2. Respuesta
        })
        .catch(error => {
            console.log(error);
            Callback(error, null)
        })
}
getUsersWithCallBack((error, results)=>{
    if(error) console.error(error)
    const name = document.getElementById('Name');
    const surName = document.getElementById('Surname');
    const phone = document.getElementById('Phone');
    for (const user of results) {
        name.innerText = user.name.first
        surName.innerText = user.name.last
        phone.innerText = user.phone
    }
    
})*/

// PROMISES
/*const getUsersWithPromise = ()=>{
    return new Promise((resolve, reject) =>{
        etch('https://randomuser.me/api/')
        .then(response => response.json())
        .then( data => {
            const { results } = data;
            resolve(results)
        })
        .catch(error => reject(error))
    })
}

getUsersWithPromise()
    .then(results => {
        const name = document.getElementById('Name');
        const surname = document.getElementById('Surname');
        const phone = document.getElementById('Phone')
        for (const user of results) {
            name.innerText = user.name.first
            surname.innerText = user.surname.last
            phone.innerText = user.phone
        }
            .catch(error => console.error(error))
    })*/

// ASYNC / AWAIT

/*const getUserWithAsync = async ()=>{
    try {
        const response = await fetch('https://randomuser.me/api/') // AUTOMATICAMENTE LO GUARDA EN LA CONSTANTE
        const { results } = await response.json()
        const name = document.getElementById('Name')
        const surName = document.getElementById('Surname')
        const phone = document.getElementById('Phone')
        for (const user of results) {
            name.innerText = user.name.first
            surName.innerText = user.name.last
            phone.innerText = user.phone
        }
        console.log(results)
    } catch (error) {
        console.error(error)
    }
}

getUserWithAsync()*/
const agregarAsync = async () =>{
    try {
        botonMas = document.getElementById('masUsuarios');
        const response = await fetch('https://randomuser.me/api/?results=10')
        const { results } = await response.json()
        const users = document.getElementById('users')
        for (const user of results) {
            users.innerHTML += `
                <tr>
                    <td>${user.name.first}</td>
                    <td>${user.name.last}</td>
                    <td>${user.phone}</td>
                </tr>
            `
        }
            
    } catch (error) {
        console.error(error)
    }
}
    agregarAsync()
