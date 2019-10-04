function mudaMenu(elemento){

elemento.id='botaop';

}
function voltaMenu(elemento){
elemento.id='botaon';

}

function validaNome(){
    var nome = document.getElementById("nome").value;
    if (!isNaN(nome)){
       
        document.getElementById("ajuda_nome").innerHTML = "<img src='../imagens/x.png' width='20px' height='20px'>";
        document.getElementById("nome").value = "";
        return false;
    }
    else{
        document.getElementById("ajuda_nome").innerHTML = "<img src='../imagens/v.png' width='20px' height='20px'>";
        return true;
    }
}

function validaSNome(){
    var nome = document.getElementById("sobrenome").value;
    if (!isNaN(nome)){
        
        document.getElementById("ajuda_snome").innerHTML = "<img src='../imagens/x.png' width='20px' height='20px'>";
        document.getElementById("sobrenome").value = "";
        return false;
    }
    else{
        document.getElementById("ajuda_snome").innerHTML = "<img src='../imagens/v.png' width='20px' height='20px'>";
        return true;
    }
}

function validaEmail(email){
   
    if ((email=="") || (email.indexOf("@")==-1) || (email.indexOf(".")==-1)){
        
        document.getElementById("ajuda_email").innerHTML = "<img src='../imagens/x.png' width='20px' height='20px'>";
        document.getElementById("email").value = "";
        return false;
    }
    else{
        document.getElementById("ajuda_email").innerHTML = "<img src='../imagens/v.png' width='20px' height='20px'>";
        return true;
    }
}

function enviar(formulario){
    if (validaNome() && validaSNome() && validaEmail(document.getElementById("email").value)){
        formulario.submit();
    }
}