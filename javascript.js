function validar(formulario){

    if(formulario.nome.value == "" || formulario.nome.value == null || formulario.nome.value.lenght < 3) {
        //É mostrado um alerta, caso o campo esteja vazio.
        alert("Por favor, preencha corretamente o campo \"nome\".");
        //Foi definido um focus no campo.
        formulario.nome.focus();
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
        document.getElementById("divisao").style.border = "5px solid grey";
    }
    else {
        botao.value = "Modo noturno (Off)"
        document.getElementById("divisao").style.backgroundColor = "";
        document.getElementById("divisao").style.border = "";
    }

}