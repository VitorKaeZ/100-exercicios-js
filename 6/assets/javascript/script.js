var numero = document.getElementById("input")
    button = document.getElementById("btn")
    output = document.querySelector('h2')

    button.onclick = function(){
        number = numero.value
        ant = number - 1
        suc = parseInt(number) + 1
        output.innerHTML = `O número é ${number}.<br>O antecessor é ${ant} e o sucessor é ${suc}.`
    }