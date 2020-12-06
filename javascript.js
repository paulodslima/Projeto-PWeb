function validar(formulario){
    if(formulario.nome.value == "" || formulario.nome.value == null || formulario.nome.value.lenght < 3) {
        //É mostrado um alerta, caso o campo esteja vazio.
        alert("Por favor, preencha corretamente o campo \"nome\".");
        //Foi definido um focus no campo.
        formulario.nome.focus();
        //o form não é enviado.
        return false;
    }
    
    if(formulario.idade.value == "" || formulario.idade.value <= 0 || formulario.idade.value == null){
        //É mostrado um alerta, caso o campo esteja vazio.
        alert("Por favor, preencha corretamente o campo \"Idade\".");
        //Foi definido um focus no campo.
        formulario.idade.focus();
        //o form não é enviado.
        return false;
    }
    
    if(formulario.dataNascimento.value == "" || formulario.dataNascimento.value == null){
        //É mostrado um alerta, caso o campo esteja vazio.
        alert("Por favor, preencha corretamente o campo \"Data de nascimento\".");
        //Foi definido um focus no campo.
        formulario.dataNascimento.focus();
        //o form não é enviado.
        return false;
    }

    if(formulario.tele.value == "" || formulario.tele.value == null){
        //É mostrado um alerta, caso o campo esteja vazio.
        alert("Por favor, preencha corretamente o campo \"telefone\".");
        //Foi definido um focus no campo.
        formulario.tele.focus();
        //o form não é enviado.
        return false;
    }

    if(formulario.email.value.indexOf("@") == -1 || formulario.email.valueOf.indexOf(".") == -1 || formulario.email.value == "" || formulario.email.value == null) {
      alert("Por favor, preencha corretamente o campo \"e-mail\".");
      formulario.email.focus();
      return false;
    }
}

function ligadesliga(botao){
    if(botao.value === "Modo noturno (Off)"){
        botao.value = "Modo noturno (On)";
        document.getElementById("divisao").style.backgroundColor = "black";
        document.getElementById("divisao").style.border = "5px solid #545454";
        document.getElementById("divisao").style.color = "white";
        document.getElementById("divisao").style.boxShadow = "0px 0px 8px rgba(0,0,0,1)";
        for(var i = 0; i<document.getElementsByClassName("ancora").length; i++){
            document.getElementsByClassName("ancora")[i].style.color = "#65aad2";
        };
        for(var i = 0; i<document.getElementsByClassName("mudarCor").length; i++){
            document.getElementsByClassName("mudarCor")[i].style.backgroundColor = "grey";
        }
        document.body.style.background = "#dcdcdc";
        document.getElementsByTagName("table")[0].style.border = "1px solid white";
        document.getElementsByTagName("caption")[0].style.border = "2px solid white";
        document.getElementsByTagName("caption")[0].style.background = "grey";
    }
    else {
        botao.value = "Modo noturno (Off)"
        document.getElementById("divisao").style.backgroundColor = "";
        document.getElementById("divisao").style.border = "";
        document.getElementById("divisao").style.color = "";
        document.getElementById("divisao").style.boxShadow = "";
        for(var i = 0; i<document.getElementsByClassName("ancora").length; i++){
            document.getElementsByClassName("ancora")[i].style.color = "";
        };
        for(var i = 0; i<document.getElementsByClassName("mudarCor").length; i++){
            document.getElementsByClassName("mudarCor")[i].style.backgroundColor = "";
        }
        document.body.style.background = "";
        document.getElementsByTagName("table")[0].style.border = "";
        document.getElementsByTagName("caption")[0].style.border = "";
        document.getElementsByTagName("caption")[0].style.background = "";
    }
}