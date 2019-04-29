const comp = document.getElementById("comp");
const nos = document.getElementById("change");
const pro = document.getElementById("pro");

comp.addEventListener("mouseover", changeColor);
comp.addEventListener("mouseout", colorIni)

function changeColor() {
    let blue = document.getElementById("change")
    blue.classList.add("blue")
}

function colorIni() {
    let blue = document.getElementById("change")
    blue.classList.remove("blue")
}

function saludo() {
    nos.innerHTML = "Hola Mundo!!!"
}


var JSON = {
    submenu: [
        { titulo: 'Ropa', url: '/ropa.html' },
        { titulo: 'Electronica', url: '/electronica.html' },
        { titulo: 'Higiene', url: '/higiene.html' },
        { titulo: 'Alimentos', url: '/alimentos.html' },
        { titulo: 'Otros', url: '/otros.html' }
    ]
}

// var tojson=JSON.parse(JSON.submenu)

function subjs() {
    for (let i = 0; i < JSON.submenu.length; i++) {
        console.log(JSON.submenu[i].titulo)
        pro.innerHTML = JSON.submenu[i].titulo

    

    }

}


