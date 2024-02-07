const url = "./productos.json"

fetch("./productos.json")
.then(response => {
    return response.json()
}).then(data =>{
    console.log(data)
    }).catch(error => {
        console.log("Error")
    })