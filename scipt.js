document.getElementById("pix").style.display = "none";
document.getElementById("cartao").style.display = "none";

let valor;

function escolha(){

    var escolhido = document.querySelector('input[name="opcao"]:checked').value;
    valor = document.getElementById("valor").value;

    calculos(escolhido, valor);
}

function calculos(escolhido, valor){
    if(escolhido === "pix"){
        document.getElementById("pix").style.display = "block";
        document.getElementById("cartao").style.display = "none";

        valor = valor * .9;
        document.querySelector(".valor").textContent = "Valor total: " + valor ;

    }
    else if(escolhido === "cartao"){
        document.getElementById("pix").style.display = "none";
        document.getElementById("cartao").style.display = "block";

        
        document.querySelector(".valor").textContent = "Valor total: " + valor ;

    }
    else {
        document.getElementById("pix").style.display = "none";
        document.getElementById("cartao").style.display = "none";
    }
}