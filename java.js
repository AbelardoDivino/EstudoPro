let dia1 = document.getElementById("dia1")
let dia2 = document.getElementById("dia2")
let dia3 = document.getElementById("dia3")
let dia4 = document.getElementById("dia4")
let dia5 = document.getElementById("dia5")
let dia6 = document.getElementById("dia6")
let dia7 = document.getElementById("dia7")
let fazer_funcionar = document.getElementsByClassName("fazer_funcionar")

let iniciar = document.getElementById("iniciar")
let para = document.getElementById("para")
let reniciar = document.getElementById("reniciar")


// cada dia operarar via modo pomodoro


dia1.addEventListener("click",()=>{

    alert("adicione a quantidade de horas que ira estudar hoje ")

    alert("tempo ate 20 min")

    let pomodoro

    let minutos = Number(prompt("adione os minutos"))

    let segundos = minutos * 60
    console.log(segundos)

    
    if (minutos > 20) {
        return alert("coloque ate 20 minutos nao exceda o valor")
    }
    let tempo = setInterval(()=>{
        console.log(segundos)
        segundos--
    },1000)
    

  
    

})



dia2.addEventListener("click",()=>{

    alert("adicione a quantidade de horas que ira estudar hoje ")

    alert("tempo ate 20 min")

    let pomodoro

    let minutos = Number(prompt("adione os minutos"))

    let segundos = minutos * 60
    console.log(segundos)

    
    if (minutos > 20) {
        return alert("coloque ate 20 minutos nao exceda o valor")
    }
    let tempo = setInterval(()=>{
        console.log(segundos)
        segundos--
    },1000)
    

})

dia3.addEventListener("click",()=>{
  
    alert("adicione a quantidade de horas que ira estudar hoje ")

    alert("tempo ate 20 min")

    let pomodoro

    let minutos = Number(prompt("adione os minutos"))

    let segundos = minutos * 60
    console.log(segundos)

    
    if (minutos > 20) {
        return alert("coloque ate 20 minutos nao exceda o valor")
    }
    let tempo = setInterval(()=>{
        console.log(segundos)
        segundos--
    },1000)
    

})

dia4.addEventListener("click",()=>{
     alert("adicione a quantidade de horas que ira estudar hoje ")

    alert("tempo ate 20 min")
})

dia5.addEventListener("click",()=>{
     alert("adicione a quantidade de horas que ira estudar hoje ")

    alert("tempo ate 20 min")
})

dia6.addEventListener("click",()=>{
     alert("adicione a quantidade de horas que ira estudar hoje ")

    alert("tempo ate 20 min")
})

dia7.addEventListener("click",()=>{
     alert("adicione a quantidade de horas que ira estudar hoje ")

    alert("tempo ate 20 min")
})