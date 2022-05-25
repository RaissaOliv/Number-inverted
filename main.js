var numero 
    var tamanho 
    var checkup = ""

function iniciar(){    
    numero = document.getElementById("number").value  
    tamanho = numero.length 
    for(var i = 0; tamanho > i; tamanho--){

     
        checkup += numero[tamanho-1]
        
        
    }
    
    if(checkup == numero){
        document.getElementById("resultado").innerHTML = "os números invertidos continuam iguais!"
    }
    else {
        document.getElementById("resultado").innerHTML = "os números invertidos são diferentes!"
    }
    


    }