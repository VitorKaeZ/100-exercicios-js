var nome = document.getElementById("inputName")
    n1 = document.getElementById("inputN1")
    n2 = document.getElementById("inputN2")
    button = document.getElementById('btn')
    output = document.querySelector('h2')

    button.onclick = function(){
        currentName = nome.value
        currentN1 = n1.value
        currentN2 = n2.value
        result = (parseFloat(currentN1) + parseFloat(currentN2))/2
        output.innerHTML = `A média de ${currentName} é: ${result}`
    }