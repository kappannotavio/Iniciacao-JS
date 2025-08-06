let valor;

document.getElementById("pix").style.display = "none";
document.getElementById("cartao").style.display = "none";

function escolha(){

    var escolhido = document.querySelector('input[name="opcao"]:checked').value;
    valor = document.getElementById("valor").value;

    if(emptyError(valor)){

    if(escolhido === "pix"){
        document.getElementById("pix").style.display = "block";
        document.getElementById("cartao").style.display = "none";

        document.querySelector("#valorPix").textContent = "Valor total: " + calculoPix(valor);

    }
    else if(escolhido === "cartao"){

        document.getElementById("pix").style.display = "none";
        document.getElementById("cartao").style.display = "block";

        atualizarValorCartao();
    }
    else {
        document.getElementById("pix").style.display = "none";
        document.getElementById("cartao").style.display = "none";
    }
}
    
}

function calculoPix(valor){

    return valor * .9;
    
}

function colocarBandeira(){
    var imgVisa = "img/logo-visa.png";
    var imgMaster = "img/logo-mastercard.png";

    var numero = document.querySelector("#numeroCartao").value;

    if(numero.startsWith("1234")){
        document.querySelector("#bandeira").src = imgVisa;
    }
    else if(numero.startsWith("4321")){
        document.querySelector("#bandeira").src = imgMaster;
    }
    else{
        document.querySelector("#bandeira").src = "";

        if(numero.length >= 4){
            document.querySelector("#erro").style.display = "inline";
        }
        else{
            document.querySelector("#erro").style.display = "none";
        }

    }
}

function atualizarValorCartao(){

    var valorFinal;
    var parcelas = document.querySelector("#quantParcelas").value;

        if(parcelas === "4"){
            valorFinal = valor * 1.05;
}
        else if(parcelas === "5"){
            valorFinal = valor * 1.1;
}
        else{
            valorFinal = valor;
        }
        document.querySelector("#valorCard").textContent = "Valor total: " + valorFinal;

}

function emptyError(valor){

    if(valor === ""){
        alert("O campo de valor não pode ser vazio!");
       return false;
    }
    else{
        return true;
    }

}

function sucessMessage(){
    alert("Pagamento efetuado com sucesso!");
}