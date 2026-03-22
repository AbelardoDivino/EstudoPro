let dias = document.getElementsByClassName("dia")

let iniciar = document.getElementById("iniciar")
let para = document.getElementById("para")
let reniciar = document.getElementById("reniciar")
let tempo = document.getElementById("tempo")
let mostrarnatela = document.getElementsByClassName("fazer_funcionar")[0]

let contar
let segundos = 0

alert("tempo nao pode ser maio que 25")

// clicar no dia
for (let i = 0; i < dias.length; i++) {
    dias[i].addEventListener("click", () => {

        let minutos = Number(tempo.value)

        if (minutos === 0 || minutos > 20) {
            alert("coloque um tempo válido (até 20 min)")
            return
        }

        segundos = minutos * 60
        console.log("tempo definido:", segundos)

    })
}

// iniciar contador
iniciar.addEventListener("click", () => {

    if (segundos <= 0) {
        alert("defina o tempo primeiro")
        return
    }

    clearInterval(contar) // evita bug

    contar = setInterval(() => {
        console.log(segundos)
mostrarnatela.innerHTML = segundos
        segundos--

        if (segundos <= 0) {
            clearInterval(contar)
            alert("tempo acabou!")
        }

    }, 1000)
})


para.addEventListener("click",()=>{
    clearInterval(contar)
})

reniciar.addEventListener("click",()=>{
    clearInterval(contar)
    segundos = 0
})